import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { MemberRegisteredEvent } from './member.registered.event';

@Injectable()
export class MemberRegisteredListener {
  @OnEvent(MemberRegisteredEvent.id)
  handleMemberRegisteredEvent(event: MemberRegisteredEvent) {
    console.log('on(member-registered-event) ::', event);
    // todo: send confirmation-mail
  }
}
