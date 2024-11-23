import { NestFactory } from '@nestjs/core';
import { InstituteModule } from './institute.module';

async function bootstrap() {
  const app = await NestFactory.create(InstituteModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
