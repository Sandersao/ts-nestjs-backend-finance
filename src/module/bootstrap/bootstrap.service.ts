import { Injectable } from '@nestjs/common';

@Injectable()
export class BootstrapService {
  list(host: string) {
    return `
      <a href="http://${host}/docs">Docs</a>
    `;
  }
}
