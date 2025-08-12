import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  Type,
  UseInterceptors,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import {
  ClassTransformOptions,
  plainToClassFromExist,
  plainToInstance,
} from 'class-transformer';
import { PaginationResponse } from 'src/Domain/models/pagination/response/pagination.response';

export function TransformResponse<T>(dto: Type<T>): MethodDecorator {
  return UseInterceptors(new ResponseTransformInterceptor(dto));
}

export function plainToDto<T = any>(
  dto: Type<T>,
  data: any,
  options?: ClassTransformOptions,
) {
  if (data?.items && data?.meta) {
    return plainToClassFromExist(new PaginationResponse(dto), data, options);
  }

  return plainToInstance(dto, data, options);
}

class ResponseTransformInterceptor<T> implements NestInterceptor {
  constructor(private readonly dto: Type<T>) {}

  intercept(_: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        if (data?.items && data?.meta) {
          return plainToDto(this.dto, data, { excludeExtraneousValues: true });
        }

        return plainToDto(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
