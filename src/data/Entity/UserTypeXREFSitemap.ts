import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { UserType } from './UserType';
import { Sitemap } from './Sitemap';

@Entity({name: 'user_type_xref_sitemap'})
export class UserTypeXREFSitemap extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUserTypeXREFSitemap: number;

  @ManyToOne(() => UserType, {nullable: false} )
  @JoinColumn({name: 'idUserType'})
  idUserType: UserType

  @ManyToOne(() => Sitemap, {nullable: false})
  @JoinColumn({name: 'idSitemap'})
  idSitemap: Sitemap

  // if true then can access to node/page
  @Column({
    default: false,
    type: "boolean"
  })
  hasAuthorization: boolean;

  @Column({
    default: false,
    type: "boolean"
  })
  create: boolean;

  @Column({
    default: false,
    type: "boolean"
  })
  read: boolean;

  @Column({
    default: false,
    type: "boolean"
  })
  update: boolean;

  @Column({
    default: false,
    type: "boolean"
  })
  destroy: boolean;


  constructor(
    idUserTypeXREFSitemap: number, 
    idUserType: UserType, 
    idSitemap: Sitemap, 
    hasAuthorization: boolean,
    create: boolean,
    read: boolean,
    update: boolean,
    destroy: boolean,
    ) {
    super();
    
    this.idUserTypeXREFSitemap = idUserTypeXREFSitemap;
    this.idUserType = idUserType;
    this.idSitemap = idSitemap;
    this.hasAuthorization = hasAuthorization;
    this.create = create;
    this.read = read;
    this.update = update;
    this.destroy = destroy;
  }
}