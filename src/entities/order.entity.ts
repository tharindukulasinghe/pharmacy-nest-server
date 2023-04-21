import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order extends BaseEntity {
  @ApiProperty()
  @Column()
  dueDate: Date;

  @ApiProperty()
  @Column()
  notes: string;

  @ApiProperty()
  @Column('longtext')
  image: string;
}
