import { Test, TestingModule } from '@nestjs/testing';
import { InstituteController } from './institute.controller';
import { InstituteService } from './institute.service';

describe('InstituteController', () => {
  let instituteController: InstituteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InstituteController],
      providers: [InstituteService],
    }).compile();

    instituteController = app.get<InstituteController>(InstituteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(instituteController.getHello()).toBe('Hello World!');
    });
  });
});
