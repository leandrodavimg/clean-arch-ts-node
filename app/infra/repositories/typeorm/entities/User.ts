import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column('text')
  name: string

  @Column({ type: 'text', unique: true })
  email: string

  @Column('text')
  password: string

  @Column({ type: 'boolean', default: false })
  confirmed: boolean

  @Column({ nullable: false, default: 'NOW()' })
  created_at: Date

  @Column({ nullable: false, default: 'NOW()' })
  updated_at: Date
}