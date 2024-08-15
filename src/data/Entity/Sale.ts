import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Index, OneToMany, ManyToOne } from 'typeorm';
import { Client } from './Client';

@Entity({name: 'sales'})
export class Sale extends BaseEntity {
  @PrimaryGeneratedColumn()
  idSale: number;

  @Column()
  saleNumber: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column()
  kilogram: number;

  @CreateDateColumn({nullable: true})
  createdAt: Date;

  @UpdateDateColumn({nullable: true})
  updatedAt: Date;

  constructor(
    idSale: number, 
    saleNumber: string, 
    date: Date,
    description: string, 
    quantity: number, 
    price: number, 
    totalPrice: number,
    kilogram: number,
    createdAt: Date,
    updatedAt: Date
    ) {
    super();
    
    this.idSale = idSale;
    this.saleNumber = saleNumber;
    this.date = date;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.totalPrice = totalPrice;
    this.kilogram = kilogram;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}