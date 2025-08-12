import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Put,
  SetMetadata,
  applyDecorators,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiExcludeController,
  ApiOperation,
  ApiQuery,
  ApiQueryOptions,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import {
  ReferenceObject,
  SchemaObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

import { kebabCase } from 'lodash';
import { PaginationResponse } from 'src/Domain/models/pagination/response/pagination.response';
import { TransformResponse } from '../interceptors/response-transform.interceptor';

export enum IAPIContext {
  auth = 'auth',
}

interface IControllerApi {
  context?: keyof typeof IAPIContext;
  controller: string;
  name: string;
}

interface IMultipartBody {
  type: 'multipart/form-data';
  schema: SchemaObject | ReferenceObject;
}
interface IJsonBody {
  type: 'application/json';
}

interface ISuccessResponse {
  status: keyof typeof HttpStatus;
  description?: string;
  content?: string;
  schema?: {
    definition: any;
    isArray: boolean;
    isPagination?: boolean;
  };
}

interface IApiMethod<TScope = any> {
  verb: 'Post' | 'Patch' | 'Put' | 'Get' | 'Delete';
  path?: string;
  summary?: string;
  description?: string;
  status: keyof typeof HttpStatus;
  body?: IMultipartBody | IJsonBody;
  queries?: ApiQueryOptions[];
  response?: {
    success?: ISuccessResponse | ISuccessResponse[];
    fail?: {
      status: keyof typeof HttpStatus;
      description: string;
      schema?: {
        definition: any;
        isArray: boolean;
      };
    }[];
  };
  guard?: {
    type: 'bearer' | 'basic';
    provider: any;
    scopes?: TScope[];
  };
}

export const Scopes = <TScope = any>(...scopes: TScope[]) =>
  SetMetadata('scopes', scopes);

export const ControllerApi = (
  { context, controller, name }: IControllerApi,
  depreciated = false,
) => {
  return applyDecorators(
    ...[
      ...(depreciated ? [ApiExcludeController()] : []),
      ApiTags(`${name}`),
      Controller(
        `${context ? kebabCase(context) + '/' : ''}${
          controller ? controller : ''
        }`,
      ),
    ],
  );
};

const applyMethod = <TScope = any>({
  verb,
  summary,
  description,
  queries = [],
  response,
  status,
  path,
  guard,
  body,
}: IApiMethod<TScope>) => {
  const verbs = {
    Get,
    Post,
    Put,
    Patch,
    Delete,
  };
  return applyDecorators(
    HttpCode(HttpStatus[status]),
    ApiOperation({
      summary,
      description,
    }),
    ...(queries.length > 0 ? queries.map((query) => ApiQuery(query)) : []),
    ...(response?.success
      ? [
          ...(!Array.isArray(response.success)
            ? [
                ApiResponse({
                  status: HttpStatus[response.success.status],
                  description: response.success.description,
                  ...(response.success?.schema
                    ? {
                        type: response.success.schema.isPagination
                          ? PaginationResponse<
                              typeof response.success.schema.definition
                            >
                          : response.success.schema.definition,
                        isArray: response.success.schema.isArray,
                      }
                    : {}),
                }),
                ...(response.success?.schema?.definition
                  ? [TransformResponse(response.success?.schema?.definition)]
                  : []),
              ]
            : response.success.map((s) =>
                ApiResponse({
                  status: HttpStatus[s.status],
                  description: s.description,
                  ...(s?.schema
                    ? {
                        type: s.schema.definition,
                        isArray: s.schema.isArray,
                      }
                    : {}),
                }),
              )),
        ]
      : []),
    ...(response?.fail ?? []).map((res) =>
      ApiResponse({
        status: HttpStatus[res.status],
        description: res.description,
        ...(res?.schema
          ? {
              type: res.schema.definition,
              isArray: res.schema.isArray,
            }
          : {}),
      }),
    ),
    verbs[verb](path),
    ...(body?.type ? [ApiConsumes(body.type)] : []),
    ...(guard
      ? [
          guard.provider,
          ...(guard.scopes ? [Scopes<TScope>(...guard.scopes)] : []),
          ApiSecurity(guard.type),
          ApiResponse({
            status: HttpStatus['UNAUTHORIZED'],
            description: 'Unauthorized. Invalid token.',
          }),
        ]
      : []),
  );
};

export const PostApi = <TScope = any>(params: Omit<IApiMethod, 'verb'>) =>
  applyMethod<TScope>({
    ...params,
    verb: 'Post',
  });

export const PatchApi = <TScope = any>(params: Omit<IApiMethod, 'verb'>) =>
  applyMethod<TScope>({
    ...params,
    verb: 'Patch',
  });

export const PutApi = <TScope = any>(params: Omit<IApiMethod, 'verb'>) =>
  applyMethod<TScope>({
    ...params,
    verb: 'Put',
  });

export const GetApi = <TScope = any>(params: Omit<IApiMethod, 'verb'>) =>
  applyMethod<TScope>({
    ...params,
    verb: 'Get',
  });

export const DeleteApi = <TScope = any>(params: Omit<IApiMethod, 'verb'>) =>
  applyMethod<TScope>({
    ...params,
    verb: 'Delete',
  });
