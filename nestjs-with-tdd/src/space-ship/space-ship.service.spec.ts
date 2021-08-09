import { Test, TestingModule } from '@nestjs/testing';

import { SpaceShipService } from './space-ship.service';
import { SpaceShipRepository } from './space-ship.repository';
import { SpaceShip } from './space-ship.dto';
import { SpaceShipEntity } from './space-ship.entity';
import { SpaceShipEntityConverter } from './space-ship.entity.converter';

jest.mock('./space-ship.repository');

describe('SpaceShipService', () => {
  let service: SpaceShipService;
  let repository: SpaceShipRepository;
  let converter: SpaceShipEntityConverter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpaceShipService,
        SpaceShipRepository,
        SpaceShipEntityConverter,
      ],
    }).compile();

    service = module.get<SpaceShipService>(SpaceShipService);
    repository = module.get<SpaceShipRepository>(SpaceShipRepository);
    converter = module.get<SpaceShipEntityConverter>(SpaceShipEntityConverter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service.save 는 converter 를 통해 repository.save 를 호출함', () => {
    const spaceShip: SpaceShip = {
      isFasterThanLight: false,
      spaceShipId: 'abc-000-ship',
      spaceShipName: '',
      spaceShipNumber: 0,
    };
    const spaceShipEntity: SpaceShipEntity = {
      isFasterThanLight: spaceShip.isFasterThanLight,
      spaceShipId: spaceShip.spaceShipId,
      spaceShipName: spaceShip.spaceShipName,
      spaceShipNumber: spaceShip.spaceShipNumber,
    };
    const spaceShipResponse: SpaceShip = {
      isFasterThanLight: spaceShip.isFasterThanLight,
      spaceShipId: spaceShip.spaceShipId,
      spaceShipName: spaceShip.spaceShipName,
      spaceShipNumber: spaceShip.spaceShipNumber,
    };

    converter.fromDto = jest.fn().mockReturnValue(spaceShipEntity);
    repository.save = jest.fn().mockResolvedValue(spaceShipEntity);
    converter.toDto = jest.fn().mockReturnValue(spaceShipResponse);

    const convertedEntity = converter.fromDto(spaceShip);

    return service.save(spaceShip).then((returnedSpaceShip: any) => {
      expect(converter.fromDto).toHaveBeenCalledWith(spaceShip);
      expect(repository.save).toHaveBeenCalledWith(convertedEntity);
      expect(converter.toDto).toHaveBeenCalledWith(spaceShipEntity);
      expect(returnedSpaceShip).toBe(spaceShipResponse);
    });
  });
});
