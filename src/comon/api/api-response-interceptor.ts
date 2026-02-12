import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from './response/api-response';

@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        if (data?.__customResponse) {
          return data.payload;
        }

        if(!data?.data) {
          return data;
        }

        return {
          code: response.statusCode ?? HttpStatus.OK,
          message: 'Success',
          data: data?.data,
          pagination: data?.pagination
        };
      }),
    );
  }
}
