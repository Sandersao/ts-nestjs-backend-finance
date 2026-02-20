import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ApiResponse } from './response/api-response';
import { ServerResponse } from 'node:http';
import { InterfaceUseCaseReturn } from '../application/usecase/usecase';

@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<
  T,
  ApiResponse<T> | string
> {
  intercept(context: ExecutionContext, next: CallHandler) {
    const response = context.switchToHttp().getResponse<ServerResponse>();

    return next.handle().pipe(
      map(
        (data: InterfaceUseCaseReturn<T> | string): ApiResponse<T> | string => {
          if (typeof data === 'string') {
            return data;
          }

          if (!data?.data) {
            return JSON.stringify(data);
          }

          return {
            code: response.statusCode ?? HttpStatus.OK,
            message: data.message ?? 'Success',
            data: data.data,
            pagination: data?.pagination,
          };
        },
      ),
    );
  }
}
