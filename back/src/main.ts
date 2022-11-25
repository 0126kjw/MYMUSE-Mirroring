import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.SERVER_PORT;
  console.log(PORT);
  console.log(process.env.MONGODB_URL);
  await app.listen(PORT);
}
bootstrap();
