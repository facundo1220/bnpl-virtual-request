import { Body, Controller, Post } from '@nestjs/common';
import { RequestService } from './services/request.service';
import { CalculateRequest } from './dtos/calculateRequest.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  calculateRequest(@Body() userInput: CalculateRequest) {
    return this.requestService.calculateRequest(userInput);
  }
}
