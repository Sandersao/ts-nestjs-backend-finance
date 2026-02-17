import { Injectable } from '@nestjs/common';
import { DateService } from '../../domain/service/date.service';

@Injectable()
export class DateInfraService implements DateService {
  generate(): Date {
    return new Date();
  }
}
