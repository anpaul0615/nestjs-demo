import { Test, TestingModule } from '@nestjs/testing';

import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';
import { SaveSpaceShipRequest } from './space-ship.dto';

jest.mock('./space-ship.service');

describe('SpaceShipController', () => {
  let controller: SpaceShipController;
  let service: SpaceShipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceShipController],
      providers: [SpaceShipService],
    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);
    service = module.get<SpaceShipService>(SpaceShipService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('controller.save 는 service.save 를 호출함', () => {
    const spaceShip: SaveSpaceShipRequest = {
      spaceShipId: 'abc-123-ship',
      spaceShipName: 'Star Harvester',
      spaceShipNumber: 42,
      isFasterThanLight: true,
    };
    controller.save(spaceShip);
    expect(service.save).toHaveBeenCalledWith(spaceShip);
  });
});
