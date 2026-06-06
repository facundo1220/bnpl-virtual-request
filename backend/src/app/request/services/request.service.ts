import { Injectable } from '@nestjs/common';
import {
  ICalculateRequest,
  ICalculateResponse,
} from '../interfaces/calculateRequest.interface';

@Injectable()
export class RequestService {
  calculateRequest(userInput: ICalculateRequest): ICalculateResponse {
    return {
      installmentDates: [],
      amount: userInput.amount,
      expirationDate: undefined,
      interestRate: 0,
    };
  }
}
