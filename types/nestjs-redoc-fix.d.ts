// types/nestjs-redoc-fix.d.ts
import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import { RedocOptions } from 'nestjs-redoc';

declare module 'nestjs-redoc' {
  export class RedocModule {
    static setup(
      path: string,
      app: INestApplication<any>,
      document: OpenAPIObject,
      options: RedocOptions
    ): Promise<void>;
  }
}
