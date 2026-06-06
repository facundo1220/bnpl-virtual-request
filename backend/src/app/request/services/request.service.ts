import { Injectable } from '@nestjs/common';
import {
  ICalculateRequest,
  ICalculateResponse,
} from '../interfaces/calculateRequest.interface';
import { InstallmentService } from 'src/app/installment/services/installment.service';

@Injectable()
export class RequestService {
  constructor(private installmentService: InstallmentService) {}

  calculateRequest(userInput: ICalculateRequest): ICalculateResponse {
    const response = this.installmentService.calculateInstallment(userInput);

    return response;
  }
}
