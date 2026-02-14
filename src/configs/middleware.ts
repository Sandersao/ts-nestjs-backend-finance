import { Type } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { LoggingMiddleware } from 'src/middleware/logging.middleware';
import { RequestContextMiddleware } from 'src/middleware/request-context.middleware';

export const middlewareList: Type<any>[] = [
  AuthMiddleware,
  LoggingMiddleware,
  RequestContextMiddleware,
];
