import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Sitemap extends BaseEntity {
  @PrimaryGeneratedColumn()
  idSitemap: number;

  @Column()
  name: string;

  @Column()
  url: string;

  // Determins if its displayable menu item if is set to false 
  // it controles if logged in user has access to a certian controller method
  @Column({
    default: false,
    type: "boolean"
  })
  isMenuItem: boolean;

  constructor(
    idSitemap: number, 
    name: string, 
    url: string, 
    isMenuItem: boolean,
    ) {
    super();
    
    this.idSitemap = idSitemap;
    this.name = name;
    this.url = url;
    this.isMenuItem = isMenuItem;
  }
}