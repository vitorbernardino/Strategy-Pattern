import { Module } from '@nestjs/common';
import { FreightCalculatorService } from './freight-calculator.service';
import { FreightCalculatorController } from './freight-calculator.controller';

@Module({
    imports: [],
    providers: [FreightCalculatorService],
    controllers: [FreightCalculatorController],
})
export class FreightCalculatorModule {}
