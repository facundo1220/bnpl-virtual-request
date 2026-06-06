import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './services/request.service';
import { InstallmentModule } from '../installment/installment.module';

@Module({
  imports: [InstallmentModule],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
