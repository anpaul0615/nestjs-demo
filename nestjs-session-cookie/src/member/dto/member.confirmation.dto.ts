import { IsEmail, IsString } from 'class-validator';

export class MemberConfirmationDto {
  @IsEmail()
  email: string;

  @IsString()
  verificationCode: string;
}
