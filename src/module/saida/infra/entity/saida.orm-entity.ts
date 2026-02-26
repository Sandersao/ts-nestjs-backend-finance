import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tb_saida')
export class SaidaOrmEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value!: number;

  @Column()
  criacaoData!: Date;
}
