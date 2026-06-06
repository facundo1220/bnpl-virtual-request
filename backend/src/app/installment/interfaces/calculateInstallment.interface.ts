export interface ICalculateInstallment {
  userIdNumber: number;
  amount: number;
  installmentsCount: number;
}

export interface ICalculateResponse {
  installmentDates: Date[];
  amount: number;
  expirationDate: Date;
  interestRate: number;
}
