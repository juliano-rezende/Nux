// import { BasicStrategy as Strategy } from 'passport-http';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UserStatus } from 'src/database/entities/enums/user-status.enum';
// import { GetUserService } from 'src/domain/usecases/user/get-user.service';
// import { AuthService } from 'src/domain/usecases/auth/services/auth.service';
// import { User } from 'src/database/entities/user.entity';

// @Injectable()
// export class BasicStrategy extends PassportStrategy(Strategy, 'basic') {
//   constructor(
//     private authService: AuthService,
//     private readonly getUserService: GetUserService,
//   ) {
//     super({ passReqToCallback: true });
//   }

//   async validate(
//     request: Request,
//     email: string,
//     password: string,
//   ): Promise<User> {
//     const token = await this.authService.login({ email, password });

//     if (!token) throw new UnauthorizedException('user not authorized');

//     const user = await this.getUserService.getByEmail(email);

//     try {
//       if (user?.status !== UserStatus.ACTIVE) {
//         throw new UnauthorizedException('user not authorized');
//       }
//     } catch (error) {
//       console.warn(error);
//       throw new UnauthorizedException('user not authorized');
//     }

//     return user;
//   }
// }
