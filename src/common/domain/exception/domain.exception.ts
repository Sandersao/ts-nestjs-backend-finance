import { HttpException } from '@nestjs/common';

export abstract class DomainException extends HttpException {}
