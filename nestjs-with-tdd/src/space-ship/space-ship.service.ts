import { Injectable } from '@nestjs/common';

import { SpaceShip } from './space-ship.dto';

@Injectable()
export class SpaceShipService {
  save(spaceShip: SpaceShip) {
    throw new Error('Method not implemented.');
  }
}
