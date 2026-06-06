import { Controller, Post } from '@nestjs/common';
import { RequestService } from './services/request.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  getHello(): string {
    return this.requestService.getHello();
  }
}
