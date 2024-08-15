import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, Index } from 'typeorm';
import { UserType } from './UserType';
import {IsEmail, IsNotEmpty, Min, Max } from 'class-validator';
import CrudOperationsEnum from '../helpers/ActionType';


@Entity({ name: 'users' })
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  idUser: number;

  @Index()
  @Column({
    default: ""
  })
  @IsNotEmpty()
  // @Max(6)
  firstName: string;

  @Column({ default: "" })
  @IsNotEmpty()
  lastName: string;

  @Column({ default: "" })
  @IsEmail({}, { 
    message: "Invalid email",
    // groups: [CrudOperationsEnum.CREATE] 
  })
  @IsNotEmpty()
  email: string;

  @Column({ default: "" })
  @IsNotEmpty()
  password: string;

  @ManyToOne(() => UserType, { nullable: true, onDelete: 'SET NULL' } )
  @JoinColumn({name: 'idUserType'})
  idUserType: UserType

  constructor(
    crudOperation: CrudOperationsEnum,
    userTypeList: UserType[],
    idUser: number, 
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string, 
    idUserType: UserType,
    ) {
    super();
    this.crudOperation = crudOperation;
    this.userTypeList = userTypeList;
    this.idUser = idUser;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.idUserType = idUserType;
  }

  crudOperation?: CrudOperationsEnum
  userTypeList: UserType[]

}
