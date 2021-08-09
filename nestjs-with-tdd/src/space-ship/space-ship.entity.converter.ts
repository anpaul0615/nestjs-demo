import { Injectable } from '@nestjs/common';

import { SpaceShip } from './space-ship.dto';
import { SpaceShipEntity } from './space-ship.entity';

@Injectable()
export class SpaceShipEntityConverter {
  fromDto(dto: SpaceShip) {
    const entity = new SpaceShipEntity();
    entity.isFasterThanLight = dto.isFasterThanLight;
    entity.spaceShipId = dto.spaceShipId;
    entity.spaceShipName = dto.spaceShipName;
    entity.spaceShipNumber = dto.spaceShipNumber;
    return entity;
  }

  toDto(entity: SpaceShipEntity) {
    const dto = new SpaceShip();
    dto.isFasterThanLight = entity.isFasterThanLight;
    dto.spaceShipId = entity.spaceShipId;
    dto.spaceShipName = entity.spaceShipName;
    dto.spaceShipNumber = entity.spaceShipNumber;
    return dto;
  }
}
