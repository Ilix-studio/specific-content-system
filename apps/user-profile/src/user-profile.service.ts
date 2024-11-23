import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfileService {
  getHello(): string {
    return 'Hello World!';
  }
}
