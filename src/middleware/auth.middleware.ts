import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  bypassAuth = true;

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token && !this.bypassAuth) {
      throw new UnauthorizedException('Token missing');
    }

    if (token !== 'Bearer 123' && !this.bypassAuth) {
      throw new UnauthorizedException('Invalid token');
    }

    next();
  }
}
