import { Injectable } from '@nestjs/common';
import { collectionBlocks, getCollectionBlock } from 'assets/collection/collection-factory';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  jsonData(): any {
    return getCollectionBlock('drivers.control.motorDriver');
  }
}