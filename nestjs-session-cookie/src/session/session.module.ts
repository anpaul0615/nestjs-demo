import { Module } from '@nestjs/common';

import { MemberModule } from '../member/member.module';
import { SessionController } from './controller';
import { SessionService } from './service';

@Module({
  imports: [MemberModule],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
