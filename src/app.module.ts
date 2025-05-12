import { Module } from '@nestjs/common';

import { FreightCalculatorModule } from './freight-calculator/freight-calculator.module';

@Module({
  imports: [FreightCalculatorModule],
})
export class AppModule {}
