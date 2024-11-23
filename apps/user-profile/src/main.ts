import { NestFactory } from '@nestjs/core';
import { UserProfileModule } from './user-profile.module';

async function bootstrap() {
  const app = await NestFactory.create(UserProfileModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
