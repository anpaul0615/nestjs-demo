import { Module } from '@nestjs/common';

import { DatabaseModule } from './common/modules';
import { MemberModule } from './member/member.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [DatabaseModule, MemberModule, SessionModule],
})
export class AppModule {}
