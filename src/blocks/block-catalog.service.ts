import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs/promises';
import { collectionBlocksFiles, CollectionBlockType } from 'src/collection-blocks/collection-factory';
@Injectable()
export class BlockCatalogService {
  private readonly collectionBlocks: Record<string, CollectionBlockType> = collectionBlocksFiles;
  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getCategories() {
    return Object.entries(this.collectionBlocks).map(([mainKey, categories]) => {
      const items = Object.entries(categories).flatMap(([subKey, subValue]) => {
        return Object.entries(subValue.children ?? {}).map(([blockId, blockObj]) => {
          return {
            id: blockId,
            path: subKey,
            file: `${this.capitalize(blockId)}.json`
          };
        });
      });

      return {
        id: mainKey,
        label: `${this.capitalize(mainKey)} Components`,
        items
      };
    });
  }

  /**
   * Tek bir grup (örnek: 'blocks') içindeki tüm block'ları getir
   */
  getGroupBlocks(group: string) {
    const groupBlock = this.collectionBlocks[group];
    if (!groupBlock) return [];

    return Object.entries(groupBlock).flatMap(([category, categoryObj]) => {
      return Object.entries(categoryObj.children ?? {}).map(([blockId, blockData]) => {
        return {
          id: blockId,
          label: blockData.label,
          path: category,
          file: `${this.capitalize(blockId)}.json`
        };
      });
    });
  }

  /**
   * Belirli bir blok dosyasını getir
   */
  async getBlockData(group: string, category: string, blockId: string) {
    const block = this.collectionBlocks[group]?.[category]?.children?.[blockId];
    if (!block) {
      throw new Error(`Block '${group}/${category}/${blockId}' not found.`);
    }

    const fileName = `${this.capitalize(blockId)}.json`;
    const fullPath = join(__dirname, `../assets/assets/collection/${category}/${fileName}`);
    const fileContent = await fs.readFile(fullPath, 'utf8');

    return {
      label: block.label,
      json: JSON.parse(fileContent)
    };
  }
}
