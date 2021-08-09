import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MemberRepository } from '../../member/model';
import { LoginDto } from '../dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(MemberRepository)
    private readonly memberRepository: MemberRepository,
  ) {}

  async authenticate(login: LoginDto) {
    const { email, password } = login;
    const member = await this.memberRepository.findOne({ email });
    if (!member) {
      throw new UnauthorizedException('not registered member');
    }
    if (
      !member.compareEmail(email) ||
      !(await member.comparePassword(password))
    ) {
      throw new UnauthorizedException('invalid email or password');
    }
    if (!member.isVerified) {
      throw new ForbiddenException('unverified member');
    }
    return member;
  }
}
