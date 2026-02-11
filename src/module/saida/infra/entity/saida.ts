import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { SaidaEntity } from '../../domain/entity/saida.entity'

@Entity()
export class Saida implements SaidaEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({type: 'decimal', precision: 10, scale: 2})
  value!: number

  @CreateDateColumn()
  ocorrencia!: Date
}
