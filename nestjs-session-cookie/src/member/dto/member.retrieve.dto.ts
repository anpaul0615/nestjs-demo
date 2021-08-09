import { MemberEntity } from '../model';

export class MemberRetrieveDto {
  email: string;
  name: string;
  isVerified: boolean;

  static createFromEntity(member: MemberEntity) {
    const memberRetrieveDto = new MemberRetrieveDto();
    memberRetrieveDto.email = member.email;
    memberRetrieveDto.name = member.name;
    memberRetrieveDto.isVerified = member.isVerified;
    return memberRetrieveDto;
  }
}
