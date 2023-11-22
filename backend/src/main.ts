import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';

const port = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());

  console.log(process.env.test);
  await app.listen(port);
}
bootstrap();
