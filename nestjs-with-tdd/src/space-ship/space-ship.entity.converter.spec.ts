import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipEntityConverter } from './space-ship.entity.converter';

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
});
