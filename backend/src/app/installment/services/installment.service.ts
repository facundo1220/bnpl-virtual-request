import { BadRequestException, Injectable } from '@nestjs/common';
import {
  ICalculateInstallment,
  ICalculateResponse,
} from '../interfaces/calculateInstallment.interface';
import { INTEREST_RANGES } from '../const/interestRateRanges.const';

@Injectable()
export class InstallmentService {
  private readonly interestRanges = INTEREST_RANGES;

  calculateInstallment(userInput: ICalculateInstallment): ICalculateResponse {
    const { amount, installmentsCount } = userInput;

    const rateSelected = this.interestRanges.find((value) => {
      return value.installmentRange.some((x) => x == installmentsCount);
    });

    if (rateSelected === undefined || rateSelected === null) {
      throw new BadRequestException(
        'No installment rate for the amount selected',
      );
    }

    const interestRate = rateSelected.rate;

    const base = (1 + interestRate) ** installmentsCount;

    const installmentAmount = (amount * (interestRate * base)) / (base - 1);

    const installmentDates = Array.from(
      { length: installmentsCount },
      (_, index) => {
        const today = new Date();
        return new Date(today.setMonth(today.getMonth() + (index + 1)));
      },
    );

    return {
      installmentDates,
      amount: Number(installmentAmount.toFixed(3)),
      expirationDate: installmentDates[installmentDates.length - 1],
      interestRate,
    };
  }
}
