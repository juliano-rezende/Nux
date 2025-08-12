// import { Strategy } from 'passport-http-bearer';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UserStatus } from 'src/database/entities/enums/user-status.enum';
// import { AuthService } from 'src/domain/usecases/auth/services/auth.service';
// import { User } from 'src/database/entities/user.entity';

// @Injectable()
// export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
//   constructor(private readonly authService: AuthService) {
//     super();
//   }

//   async validate(token: string): Promise<User> {
//     const user = await this.authService.validateJwt(token);

//     if (!user) {
//       throw new UnauthorizedException('unauthorized');
//     }

//     if (user.status !== UserStatus.ACTIVE) {
//       throw new UnauthorizedException('inactive user', {
//         cause: { status: user.status },
//       });
//     }

//     return user;
//   }
// }
