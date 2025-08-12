// import {
//   ExecutionContext,
//   UnauthorizedException,
//   UseGuards,
//   applyDecorators,
//   createParamDecorator,
// } from '@nestjs/common';
// import { User } from 'src/database/entities/user.entity';
// import { BearerGuard } from './bearer.guard';
// import { BasicGuard } from './basic.guard';

// export interface IAuthRequest {
//   user: User;
// }

// export function Guard(type: 'basic' | 'bearer' = 'bearer') {
//   return applyDecorators(
//     UseGuards(type === 'basic' ? BasicGuard : BearerGuard),
//   );
// }

// export const AuthRequest = createParamDecorator(
//   (_: any, ctx: ExecutionContext): IAuthRequest => {
//     const request = ctx.switchToHttp().getRequest();

//     if (!request.user) throw new UnauthorizedException();
//     return { user: { ...request.user } };
//   },
// );
