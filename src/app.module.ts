import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockCatalogController } from './blocks/block-catalog.controller';
import { BlockCatalogService } from './blocks/block-catalog.service';

@Module({
  imports: [],
  controllers: [AppController, BlockCatalogController],
  providers: [AppService, BlockCatalogService],
})
export class AppModule { }
