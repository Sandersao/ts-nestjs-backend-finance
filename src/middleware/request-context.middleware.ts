import { Request, Response, NextFunction } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { randomUUID } from 'node:crypto'

@Injectable()
export class RequestContextMiddleware
    implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        req.headers['x-request-id'] ||= randomUUID()
        next()
    }
}
