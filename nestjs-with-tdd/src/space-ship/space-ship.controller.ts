import { Controller, Post } from '@nestjs/common';

import { SpaceShipService } from './space-ship.service';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private service: SpaceShipService) {}

  @Post()
  public save(spaceShip: any) {
    this.service.save(spaceShip);
  }
}
