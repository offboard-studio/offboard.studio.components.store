import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  jsonData(): any {
    // return getCollectionBlock('drivers.control.motorDriver');
    // return collectionBlocks;
  }
}