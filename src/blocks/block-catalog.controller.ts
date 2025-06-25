import { Controller, Get, Param } from '@nestjs/common';
import { BlockCatalogService } from './block-catalog.service';

@Controller('blocks')
export class BlockCatalogController {
  constructor(private readonly catalogService: BlockCatalogService) {}

  @Get('categories')
  getAllCategories() {
    return this.catalogService.getCategories();
  }

  @Get(':group')
  getGroup(@Param('group') group: string) {
    return this.catalogService.getGroupBlocks(group);
  }

  @Get(':group/:category/:blockId')
  async getBlockDetail(
    @Param('group') group: string,
    @Param('category') category: string,
    @Param('blockId') blockId: string
  ) {
    return await this.catalogService.getBlockData(group, category, blockId);
  }
}
