import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { MemberConfirmationDto, MemberRegisterDto } from '../dto';
import { MemberRepository } from '../model';
import { MemberRegisteredEvent } from '../event';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberRepository)
    private readonly memberRepository: MemberRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async register(member: MemberRegisterDto) {
    if (await this.memberRepository.exists(member.email)) {
      throw new ConflictException('email already existed');
    }
    const registeredMember = await this.memberRepository.add(member);
    // emit confirmation
    this.eventEmitter.emit(MemberRegisteredEvent.id, registeredMember);
    return registeredMember;
  }

  async confirm(member: MemberConfirmationDto) {
    const { email, verificationCode } = member;
    const existedMember = await this.memberRepository.findOne({ email });
    if (!existedMember) {
      throw new NotFoundException('no exist member');
    }
    if (existedMember.verificationCode !== verificationCode) {
      throw new UnprocessableEntityException(
        'verification code is not matched',
      );
    }
    return this.memberRepository.updateVerificationCode(existedMember);
  }

  async withdraw(memberId: number) {
    return this.memberRepository.deleteById(memberId);
  }
}
