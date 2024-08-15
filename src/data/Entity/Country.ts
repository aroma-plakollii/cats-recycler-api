import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'countries' })
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  idCountry: number;

  @Column()
  countryName: string;

  @Column()
  countryCode: string;

  constructor(idCountry: number, countryName: string, countryCode: string) {
    super();
    
    this.idCountry = idCountry;
    this.countryName = countryName;
    this.countryCode = countryCode;
  }
}