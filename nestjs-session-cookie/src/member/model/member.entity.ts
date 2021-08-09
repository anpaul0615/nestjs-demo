import { Entity, Column, BeforeInsert, Generated, Index } from 'typeorm';
import bcrypt from 'bcrypt';

import { BaseEntity } from '../../common/model';
import { MemberRegisterDto } from '../dto';

@Entity()
export class MemberEntity extends BaseEntity {
  constructor() {
    super();
  }

  static fromDto(dto: MemberRegisterDto): MemberEntity {
    const memberEntity = new MemberEntity();
    memberEntity.email = dto.email;
    memberEntity.password = dto.password;
    memberEntity.name = dto.name;
    return memberEntity;
  }

  @Column({ unique: true })
  @Index()
  email: string;

  @Column()
  password: string;

  @Column()
  passwordSalt: string;

  @Column()
  name: string;

  @Column()
  @Generated('uuid')
  verificationCode: string;

  @Column({ default: false })
  isVerified: boolean;

  @BeforeInsert()
  private async setHashedPassword(): Promise<void> {
    const salt = await bcrypt.genSalt(5381); // todo: salt configuration
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordSalt = salt;
  }

  async comparePassword(password: string): Promise<boolean> {
    // return bcrypt.compare(password, this.password);
    return this.password === (await bcrypt.hash(password, this.passwordSalt));
  }

  compareEmail(email: string): boolean {
    return this.email === email;
  }
}
