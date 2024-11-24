// src/user-profile.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfile } from './schema/user-profile.schema';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectModel(UserProfile.name) private userProfileModel: Model<UserProfile>,
  ) {}

  async createUserProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const newUserProfile = new this.userProfileModel(data);
    return newUserProfile.save();
  }

  async getAllUserProfiles(): Promise<UserProfile[]> {
    return this.userProfileModel.find().exec();
  }

  async getUserProfileById(id: string): Promise<UserProfile> {
    return this.userProfileModel.findById(id).exec();
  }
}
