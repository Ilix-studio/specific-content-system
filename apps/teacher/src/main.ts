import { NestFactory } from '@nestjs/core';
import { TeacherModule } from './teacher.module';

async function bootstrap() {
  const app = await NestFactory.create(TeacherModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
