import {
  IsCurrency,
  IsInt,
  IsNumber,
  IsPhoneNumber,
  Max,
  Min,
} from 'class-validator';

export class CalculateRequest {
  @Min(1)
  @IsNumber()
  userIdNumber: number;

  @IsPhoneNumber('CO')
  userPhoneNumber: number;

  @Max(500000)
  @Min(50000)
  @IsCurrency()
  amount: number;

  @Max(24)
  @Min(1)
  @IsInt()
  installmentsCount: number;
}

export class CalculateResponse {}
