import { Module } from '@nestjs/common';
import { BlockCatalogService } from './block-catalog.service';

@Module({
  providers: [BlockCatalogService],
  exports: [BlockCatalogService],
})
export class BlockCatalogModule {}
