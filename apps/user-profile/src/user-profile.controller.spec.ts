import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';

describe('UserProfileController', () => {
  let userProfileController: UserProfileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserProfileController],
      providers: [UserProfileService],
    }).compile();

    userProfileController = app.get<UserProfileController>(UserProfileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userProfileController.getHello()).toBe('Hello World!');
    });
  });
});
