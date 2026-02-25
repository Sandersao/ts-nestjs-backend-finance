import { ExceptionFilter } from '@nestjs/common';
import { DomainExceptionFilter } from '@src/common/api/domain-exception-filter';

export const exceptionFilterList: ExceptionFilter[] = [
  new DomainExceptionFilter(),
];
