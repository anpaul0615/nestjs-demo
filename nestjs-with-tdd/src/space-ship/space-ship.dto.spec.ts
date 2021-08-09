import {
  ValidationPipe,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { SpaceShip } from './space-ship.dto';

describe('SaveSpaceShipRequest on ValidationPipe', () => {
  let validationPipe: ValidationPipe;
  let metadata: ArgumentMetadata;

  beforeEach(() => {
    validationPipe = new ValidationPipe({ transform: true, whitelist: true });
    metadata = {
      type: 'body',
      metatype: SpaceShip,
      data: '',
    };
  });

  it('valid payload 는 통과시킴 ', async () => {
    const validPayload: any = {
      spaceShipId: 'abc-123-ship',
      spaceShipName: 'Star Harvester',
      spaceShipNumber: 42,
      isFasterThanLight: true,
    };

    await validationPipe
      .transform(validPayload, metadata)
      .then((r) => {
        expect(r).toBeInstanceOf(SpaceShip); // fire bad-request
      })
      .catch(() => {
        throw new Error('can not get in here');
      });
  });

  it('invalid payload 는 BadRequestException 를 발생시킴 ', async () => {
    const invalidPayloads: any[] = [
      {
        // spaceShipId: 'abc-123-ship',
        spaceShipName: 'Star Harvester',
        spaceShipNumber: 42,
        isFasterThanLight: true,
      },
      {
        spaceShipId: 'abc-123-ship',
        // spaceShipName: 'Star Harvester',
        spaceShipNumber: 42,
        isFasterThanLight: true,
      },
      {
        spaceShipId: 'abc-123-ship',
        spaceShipName: 'Star Harvester',
        // spaceShipNumber: 42,
        isFasterThanLight: true,
      },
      {
        spaceShipId: 'abc-123-ship',
        spaceShipName: 'Star Harvester',
        spaceShipNumber: 42,
        // isFasterThanLight: true,
      },
      {
        'unknown key': 'unknown value',
      },
    ];

    for (const _payload of invalidPayloads) {
      await validationPipe
        .transform(_payload, metadata)
        .then(() => {
          throw new Error('can not get in here');
        })
        .catch((e) => {
          expect(e).toBeInstanceOf(BadRequestException);
        });
    }
  });
});
