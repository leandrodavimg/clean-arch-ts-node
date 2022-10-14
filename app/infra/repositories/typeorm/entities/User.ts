import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column('text')
  name: string

  @Column('text')
  email: string

  @Column('text')
  password: string
}