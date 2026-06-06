import { Module } from '@nestjs/common';
import { InstallmentService } from './services/installment.service';

@Module({
  imports: [],
  controllers: [],
  providers: [InstallmentService],
  exports: [InstallmentService],
})
export class InstallmentModule {}
