import { Injectable } from '@nestjs/common';

import { SpaceShip } from './space-ship.dto';
import { SpaceShipRepository } from './space-ship.repository';
import { SpaceShipEntityConverter } from './space-ship.entity.converter';

@Injectable()
export class SpaceShipService {
  constructor(
    private repository: SpaceShipRepository,
    private entityConverter: SpaceShipEntityConverter,
  ) {}

  save(spaceShip: SpaceShip) {
    const spaceShipEntity = this.entityConverter.fromDto(spaceShip);
    this.repository.save(spaceShipEntity);
  }
}
