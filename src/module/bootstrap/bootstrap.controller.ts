import { Controller, Get, Req } from '@nestjs/common';
import { BootstrapService } from '@src/module/bootstrap/bootstrap.service';
import { Request } from 'express';

@Controller()
export class BootstrapController {
  constructor(private readonly appService: BootstrapService) {}

  @Get()
  list(@Req() req: Request) {
    return this.appService.list(req.get('host')!);
  }
}
