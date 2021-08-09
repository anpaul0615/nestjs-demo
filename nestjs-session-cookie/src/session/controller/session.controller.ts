import {
  Controller,
  HttpCode,
  Post,
  Delete,
  Session,
  Body,
  ForbiddenException,
} from '@nestjs/common';

import { LoginDto } from '../dto';
import { SessionService } from '../service';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('/')
  @HttpCode(201)
  async signIn(@Session() session, @Body() login: LoginDto) {
    if (session.isLogin) {
      console.log('중복 로그인 감지'); // todo: duplicated login handling
      return;
    }
    const loginMember = await this.sessionService.authenticate(login);
    session.isLogin = true;
    session.memberId = loginMember.id;
  }

  @Delete('/me')
  @HttpCode(204)
  signOut(@Session() session: Record<string, any>) {
    if (!session.isLogin) {
      throw new ForbiddenException('not login');
    }
    session.destroy();
  }
}
