import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { FreightCalculatorService } from './freight-calculator.service';
import { SedexStrategy } from 'src/contracts/Shipping-options/SedexStrategy';
import { TransportadoraStrategy } from 'src/contracts/Shipping-options/TransportadoraStrategy';
import { PacStrategy } from 'src/contracts/Shipping-options/PacStrategy';
import { ShippingStrategy } from 'src/contracts/ShippingStrategy';

interface RequestType {
    ShippimentType: string;
    weight: number;
    distance: number;
}
@Controller('freight-calculator')
export class FreightCalculatorController {
    constructor(private readonly calculateFreightService: FreightCalculatorService) {}

    @Post()
    calculateFreight(@Body() request: RequestType): number {
        const { ShippimentType, weight, distance } = request;

        switch (ShippimentType) {
            case 'SEDEX':
                this.calculateFreightService.SetShippingType(new SedexStrategy);
                break;
            case 'PAC':
                this.calculateFreightService.SetShippingType(new PacStrategy);
                break;
            case 'Transportadora':
                this.calculateFreightService.SetShippingType(new TransportadoraStrategy);
                break;
            default:
                throw new BadRequestException('Invalid ShippimentType');
        }

        return this.calculateFreightService.calculate(weight, distance);
    }

}
