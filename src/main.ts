import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as express from 'express';

class ServerController {
  private app!: NestExpressApplication;

  private readonly globalPrefix = 'api';
  private readonly port = process.env.PORT || 3000;

  async createServer(): Promise<void> {

    this.app = (await NestFactory.create<NestExpressApplication>(AppModule));
    // this.app = await NestFactory.create(AppModule);
    

    // this.app = (await NestFactory.create(AppModule)) as INestApplication;


    this.app.use('/docs', express.static(join(__dirname, 'docs')));

    this.app.enableCors({
      origin: '*', // Allow all origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
      allowedHeaders: 'Content-Type, Authorization', // Allowed headers
    });
    this.app.setGlobalPrefix(this.globalPrefix);

    const swaggerConfig = new DocumentBuilder()
      .setTitle('Offboard Studio API')
      .setDescription('API documentation for Offboard Studio')
      .setVersion('1.0.0')
      .addTag('offboard-studio')
      .build();

    const document = SwaggerModule.createDocument(this.app, swaggerConfig);

    const redocOptions: RedocOptions = {
      title: 'Offboard Studio API Docs',
      logo: {
        // url: 'https://redocly.github.io/redoc/petstore-logo.png',
        backgroundColor: '#ffffff',
        altText: 'Offboard Studio Logo',
      },
      sortPropsAlphabetically: true,
      hideDownloadButton: false,
      hideHostname: false,
      // auth: {
      //   enabled: true,
      //   user: 'admin',
      //   password: '123',
      // },
      // tagGroups: [
      //   {
      //     name: 'Main Modules',
      //     tags: ['offboard-studio'],
      //   },
      // ],
    };

    // Swagger UI (optional)
    SwaggerModule.setup('docs', this.app, document, {
      customSiteTitle: 'API Docs',
      // customfavIcon: '/docs/favicon-32x32.png',
      // customCssUrl: '/docs/swagger-ui.css',
      // customJs: [
      //   '/docs/swagger-ui-bundle.js',
      //   '/docs/swagger-ui-standalone-preset.js'
      // ]

      // customCssUrl: 'https://unpkg.com/swagger-ui-dist@4.15.5/swagger-ui.css',
      // customJs: [
      //   'https://unpkg.com/swagger-ui-dist@4.15.5/swagger-ui-bundle.js',
      //   'https://unpkg.com/swagger-ui-dist@4.15.5/swagger-ui-standalone-preset.js'
      // ]

    });

    // Redoc UI
    // await RedocModule.setup('redoc', this.app, document, redocOptions);

    await RedocModule.setup('redoc', this.app, document, redocOptions);


    await this.app.listen(this.port);
    const url = await this.app.getUrl();

    Logger.log(`🚀 Server ready at ${url}/${this.globalPrefix}`);
    Logger.log(`📄 Swagger UI at ${url}/docs`);
    Logger.log(`📘 Redoc at ${url}/redoc`);
  }

  async close(): Promise<void> {
    if (this.app) {
      await this.app.close();
      Logger.log('🛑 Server shut down gracefully.');
    }
  }
}

async function bootstrap(): Promise<void> {
  const serverController = new ServerController();
  await serverController.createServer();

  process.on('SIGINT', async () => {
    Logger.warn('SIGINT received. Closing app...');
    await serverController.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    Logger.warn('SIGTERM received. Closing app...');
    await serverController.close();
    process.exit(0);
  });
}


bootstrap();