import { IsString, IsNumber, IsBoolean, Length } from 'class-validator';

export class SaveSpaceShipRequest {
  @IsString()
  @Length(10, 20)
  spaceShipId: string;

  @IsString()
  @Length(0, 20)
  spaceShipName: string;

  @IsNumber()
  spaceShipNumber: number;

  @IsBoolean()
  isFasterThanLight: boolean;
}
