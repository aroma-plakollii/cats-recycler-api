import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, CreateDateColumn, UpdateDateColumn, Index, ManyToOne } from 'typeorm';
import { Client } from './Client';
import { User } from './Users';


@Entity({name: 'orders'})
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  idOrder: number;

  @ManyToOne(() => Client, {nullable: false})
  @JoinColumn({ name: 'idClient' })
  idClient: Client;

  @Index()
  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  orderDate: Date;

  @Column()
  type: string;

  @Column({nullable: true})
  material: string;

  @Column()
  kilogram: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'idUser' })
  idUser: User;

  @CreateDateColumn({nullable: true})
  createdAt: Date;

  @UpdateDateColumn({nullable: true})
  updatedAt: Date;

  constructor(
    idOrder: number, 
    idClient: Client, 
    quantity: number, 
    price: number, 
    orderDate: Date,
    type: string,
    material: string,
    kilogram: number,
    totalPrice: number,
    idUser: User,
    createdAt: Date,
    updatedAt: Date
    ) {
    super();
    
    this.idOrder = idOrder;
    this.idClient = idClient;
    this.quantity = quantity;
    this.price = price;
    this.orderDate = orderDate;
    this.type = type;
    this.material = material;
    this.kilogram = kilogram;
    this.totalPrice = totalPrice;
    this.idUser = idUser,
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}