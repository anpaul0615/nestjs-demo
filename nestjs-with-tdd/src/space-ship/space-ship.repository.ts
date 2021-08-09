import { Injectable } from '@nestjs/common';

import { SpaceShipEntity } from './space-ship.entity';

@Injectable()
export class SpaceShipRepository {
  save(spaceShipEntity: SpaceShipEntity) {
    throw new Error('Method not implemented.');
  }
}
