import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class SpaceShipEntity {
  @PrimaryColumn({ name: 'id' })
  spaceShipId: string;

  @Column({ name: 'name' })
  spaceShipName: string;

  @Column({ name: 'space_ship_number' })
  spaceShipNumber: number;

  @Column({ name: 'is_faster_than_light' })
  isFasterThanLight: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  @CreateDateColumn()
  createdAt?: Date;
}
