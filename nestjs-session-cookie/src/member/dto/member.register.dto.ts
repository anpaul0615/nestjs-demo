import { IsEmail, IsString } from 'class-validator';

export class MemberRegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}
