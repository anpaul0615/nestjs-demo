import { Injectable } from '@nestjs/common';

import { SaveSpaceShipRequest } from './space-ship.dto';

@Injectable()
export class SpaceShipService {
  save(saveSpaceShipRequest: SaveSpaceShipRequest) {
    throw new Error('Method not implemented.');
  }
}
