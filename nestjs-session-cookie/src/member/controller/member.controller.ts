import {
  Controller,
  HttpCode,
  Post,
  Delete,
  Session,
  Body,
  ForbiddenException,
} from '@nestjs/common';

import {
  MemberRegisterDto,
  MemberConfirmationDto,
  MemberRetrieveDto,
} from '../dto';
import { MemberService } from '../service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/')
  @HttpCode(201)
  async signup(@Body() member: MemberRegisterDto): Promise<MemberRetrieveDto> {
    const registeredMember = await this.memberService.register(member);
    return MemberRetrieveDto.createFromEntity(registeredMember);
  }

  @Post('/confirm')
  @HttpCode(204)
  async signupConfirm(
    @Session() session,
    @Body() member: MemberConfirmationDto,
  ) {
    const confirmedMember = await this.memberService.confirm(member);
    session.isLogin = true;
    session.memberId = confirmedMember.id;
  }

  @Delete('/me')
  @HttpCode(204)
  async deleteMember(@Session() session): Promise<void> {
    if (!session.isLogin) {
      throw new ForbiddenException('not login');
    }
    await this.memberService.withdraw(session.memberId);
    session.destroy();
  }
}
