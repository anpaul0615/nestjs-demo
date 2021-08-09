import { Injectable } from '@nestjs/common';

import { SpaceShip } from './space-ship.dto';
import { SpaceShipRepository } from './space-ship.repository';

@Injectable()
export class SpaceShipService {
  constructor(private repository: SpaceShipRepository) {}

  save(spaceShip: SpaceShip) {
    this.repository.save(spaceShip);
  }
}
