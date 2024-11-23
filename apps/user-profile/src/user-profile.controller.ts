import { Controller, Get } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';

@Controller()
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  getHello(): string {
    return this.userProfileService.getHello();
  }
}
