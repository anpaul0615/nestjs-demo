import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemberController } from './controller';
import { MemberService } from './service';
import { MemberRepository } from './model';
import { MemberRegisteredListener } from './event';

const repositoryModules = TypeOrmModule.forFeature([MemberRepository]);

@Module({
  imports: [EventEmitterModule.forRoot(), repositoryModules],
  controllers: [MemberController],
  providers: [MemberService, MemberRegisteredListener],
  exports: [repositoryModules],
})
export class MemberModule {}
