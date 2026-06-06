import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestService {
  getHello(): string {
    return 'Hello World!';
  }
}
