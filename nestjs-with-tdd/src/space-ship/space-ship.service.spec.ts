import { Test, TestingModule } from '@nestjs/testing';

import { SpaceShipService } from './space-ship.service';
import { SpaceShipRepository } from './space-ship.repository';
import { SpaceShip } from './space-ship.dto';

describe('SpaceShipService', () => {
  let service: SpaceShipService;
  let repository: SpaceShipRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipService, SpaceShipRepository],
    }).compile();

    service = module.get<SpaceShipService>(SpaceShipService);
    repository = module.get<SpaceShipRepository>(SpaceShipRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service.save 는 repository.save 를 호출함', () => {
    const spaceShip: SpaceShip = {
      isFasterThanLight: false,
      spaceShipId: 'abc-000-ship',
      spaceShipName: '',
      spaceShipNumber: 0,
    };
    service.save(spaceShip); // fail..! (Method not implemented)
    expect(repository.save).toHaveBeenCalled();
  });
});
