import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserType extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUserType: number;

  @Column()
  typeName: string;

  constructor(
    idUserType: number, 
    typeName: string,
    ) {
    super();
    
    this.idUserType = idUserType;
    this.typeName = typeName;
  }
}