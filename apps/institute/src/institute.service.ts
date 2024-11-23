import { Injectable } from '@nestjs/common';

@Injectable()
export class InstituteService {
  getHello(): string {
    return 'Hello World!';
  }
}
