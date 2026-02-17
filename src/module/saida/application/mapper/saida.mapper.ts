import { SaidaResponse } from '../../api/response/saida.response';
import { Saida } from '../../domain/entity/saida';

export class SaidaMapper {
  static toResponse(saida: Saida) {
    return new SaidaResponse(
      saida.uuid,
      saida.name,
      saida.value,
      saida.criacao.date,
    );
  }
}
