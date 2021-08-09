import { Controller, Post } from '@nestjs/common';

import { SpaceShipService } from './space-ship.service';
import { SaveSpaceShipRequest } from './space-ship.dto';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private service: SpaceShipService) {}

  @Post()
  public save(saveSpaceShipRequest: SaveSpaceShipRequest) {
    this.service.save(saveSpaceShipRequest);
  }
}
