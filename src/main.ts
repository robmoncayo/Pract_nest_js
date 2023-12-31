import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Mi API Documentation')
  .setDescription('Esto es para youtube')
  .setVersion('1.0')
  .addTag('items')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
