import { Saida } from 'src/module/saida/domain/entity/saida';

export function makeSaida(
  props?: Partial<{
    uuid: string;
    name: string;
    value: number;
    date: Date;
  }>,
) {
  return Saida.create(
    props?.uuid ?? 'test-uuid',
    props?.name ?? 'default',
    props?.value ?? 10,
    props?.date ?? new Date('2026-01-01'),
  );
}
