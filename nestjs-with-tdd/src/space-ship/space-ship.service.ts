import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { SpaceShip } from './space-ship.dto';
import { SpaceShipRepository } from './space-ship.repository';
import { SpaceShipEntityConverter } from './space-ship.entity.converter';

@Injectable()
export class SpaceShipService {
  constructor(
    private repository: SpaceShipRepository,
    private entityConverter: SpaceShipEntityConverter,
  ) {}

  save(spaceShip: SpaceShip): Promise<SpaceShip> {
    const spaceShipEntity = this.entityConverter.fromDto(spaceShip);
    return this.repository
      .save(spaceShipEntity)
      .then(this.entityConverter.toDto)
      .catch(() => {
        throw new UnprocessableEntityException('Could not save');
      });
  }
}
