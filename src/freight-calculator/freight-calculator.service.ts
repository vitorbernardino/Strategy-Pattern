import { Injectable } from '@nestjs/common';
import { ShippingStrategy } from 'src/contracts/ShippingStrategy';

@Injectable()
export class FreightCalculatorService {
    private shippingType: ShippingStrategy;

  public calculate(weight: number, distance: number): number {
    return this.shippingType.calculate(weight, distance);
  }

  public SetShippingType(shippingType: ShippingStrategy): void{
    this.shippingType = shippingType;
  }
}
