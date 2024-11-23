import { Module } from '@nestjs/common';
import { InstituteController } from './institute.controller';
import { InstituteService } from './institute.service';

@Module({
  imports: [],
  controllers: [InstituteController],
  providers: [InstituteService],
})
export class InstituteModule {}
