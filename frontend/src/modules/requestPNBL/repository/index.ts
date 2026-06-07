import axios, { AxiosInstance } from "axios";

import { baseURL, endpoints } from "./settings";

export type CreateRequestPayload = {
  userIdNumber: number;
  userPhoneNumber: string;
  amount: number;
  installmentsCount: number;
};

export type CreateRequestResponse = {
  installmentDates: string[];
  amount: number;
  expirationDate: string;
  interestRate: number;
};

class RequestPNBLRepository {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL });
  }

  async createRequest(payload: CreateRequestPayload) {
    const { data } = await this.client.post<CreateRequestResponse>(
      endpoints.createRequest,
      payload
    );

    return data;
  }
}

export const requestPNBLRepository = new RequestPNBLRepository();
