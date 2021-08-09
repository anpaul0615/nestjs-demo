import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipEntityConverter } from './space-ship.entity.converter';
import { SpaceShip } from './space-ship.dto';
import { SpaceShipEntity } from './space-ship.entity';

describe('SpaceShipEntityConverter', () => {
  let provider: SpaceShipEntityConverter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipEntityConverter],
    }).compile();

    provider = module.get<SpaceShipEntityConverter>(SpaceShipEntityConverter);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('SpaceShip ↔ SpaceShipEntity 상호변환 할 수 있음', () => {
    const dto: SpaceShip = {
      isFasterThanLight: false,
      spaceShipId: 'abc-000-ship',
      spaceShipName: '',
      spaceShipNumber: 0,
    };
    const entity: SpaceShipEntity = {
      isFasterThanLight: dto.isFasterThanLight,
      spaceShipId: dto.spaceShipId,
      spaceShipName: dto.spaceShipName,
      spaceShipNumber: dto.spaceShipNumber,
    };
    expect(provider.fromDto(dto)).toEqual(entity);
    expect(provider.toDto(entity)).toEqual(dto);
  });
});
