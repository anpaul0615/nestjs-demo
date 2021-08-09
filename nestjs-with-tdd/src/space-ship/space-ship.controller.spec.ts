import { Test, TestingModule } from '@nestjs/testing';

import { SpaceShipController } from './space-ship.controller';

describe('SpaceShipController', () => {
  let controller: SpaceShipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceShipController],
    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
