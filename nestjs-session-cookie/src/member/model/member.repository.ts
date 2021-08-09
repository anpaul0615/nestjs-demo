import { EntityRepository, Repository } from 'typeorm';

import { MemberRegisterDto } from '../dto';
import { MemberEntity } from './member.entity';

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity> {
  async exists(email: string) {
    const existedMember = await this.findOne({ email });
    return Boolean(existedMember);
  }

  add(memberRegisterDto: MemberRegisterDto) {
    return this.save(MemberEntity.fromDto(memberRegisterDto));
  }

  updateVerificationCode(member: MemberEntity) {
    return this.save({ ...member, isVerified: true });
  }

  deleteById(memberId: number) {
    return this.delete({ id: memberId });
  }
}
