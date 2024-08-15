import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Index, OneToMany, ManyToOne } from 'typeorm';
import { Country } from './Country';
import { Municipality } from './Municipality';
import { User } from './Users';

@Entity({name: 'clients'})
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  idClient: number;

  @Index()
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  nationalId: string;

  @Column({
    nullable: true
  })
  digitalSignature: string;

  @ManyToOne(() => Country, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'idCountry' })
  idCountry: Country;

  @ManyToOne(() => Municipality, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'idMunicipality' })
  idMunicipality: Municipality;

  @ManyToOne(() => User,{ nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'idUser' })
  idUser: User;

  constructor(
    idClient: number, 
    firstName: string, 
    lastName: string, 
    phone: string,
    nationalId: string,
    digitalSignature: string,
    idCountry: Country,
    idMunicipality: Municipality,
    idUser: User
    ) {
    super();
    
    this.idClient = idClient;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.nationalId = nationalId;
    this.digitalSignature = digitalSignature;
    this.idCountry = idCountry;
    this.idMunicipality = idMunicipality;
    this.idUser = idUser
  }

}