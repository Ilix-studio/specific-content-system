import { Controller, Get } from '@nestjs/common';
import { InstituteService } from './institute.service';

@Controller()
export class InstituteController {
  constructor(private readonly instituteService: InstituteService) {}

  @Get()
  getHello(): string {
    return this.instituteService.getHello();
  }
}
