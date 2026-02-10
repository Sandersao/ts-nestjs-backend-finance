import { Request, Response, NextFunction } from 'express'
import { randomUUID } from 'crypto'
import { Injectable, NestMiddleware } from '@nestjs/common'

@Injectable()
export class RequestContextMiddleware
    implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        req.headers['x-request-id'] ||= randomUUID()
        next()
    }
}
