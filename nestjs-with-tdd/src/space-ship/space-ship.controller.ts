import { Body, Controller, Post } from '@nestjs/common';

import { SpaceShipService } from './space-ship.service';
import { SpaceShip } from './space-ship.dto';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private service: SpaceShipService) {}

  @Post()
  public save(@Body() spaceShip: SpaceShip): Promise<SpaceShip> {
    return this.service.save(spaceShip);
  }
}
