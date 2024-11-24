// src/user-profile.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfile } from './schema/user-profile.schema';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  async createUserProfile(
    @Body() body: Partial<UserProfile>,
  ): Promise<UserProfile> {
    return this.userProfileService.createUserProfile(body);
  }

  @Get()
  async getAllUserProfiles(): Promise<UserProfile[]> {
    return this.userProfileService.getAllUserProfiles();
  }

  @Get(':id')
  async getUserProfileById(@Param('id') id: string): Promise<UserProfile> {
    return this.userProfileService.getUserProfileById(id);
  }
}
