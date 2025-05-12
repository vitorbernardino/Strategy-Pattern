import { ShippingStrategy } from "../ShippingStrategy";

export class PacStrategy implements ShippingStrategy{
    calculate(weight: number, distance: number): number {
       // Taxa base de R$15 + R$1 por kg + R$0.3 por km
       const baseFee = 15;
       const weightFee = weight * 1;
       const distanceFee = distance * 0.3;
       
       return baseFee + weightFee + distanceFee;
    }

}