import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  index: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;
}
