import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from './Country';

@Entity({name: 'municipalities'})
export class Municipality extends BaseEntity {
  @PrimaryGeneratedColumn()
  idMunicipality: number;

  @Column()
  municipalityName: string;

  @ManyToOne(() => Country, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  idCountry: Country;

  constructor(
    idMunicipality: number, 
    municipalityName: string, 
    idCountry: Country,
    ) {
    super();
    
    this.idMunicipality = idMunicipality;
    this.municipalityName = municipalityName;
    this.idCountry = idCountry;
  }
}