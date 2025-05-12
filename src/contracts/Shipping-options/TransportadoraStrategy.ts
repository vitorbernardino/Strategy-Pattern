import { ShippingStrategy } from "../ShippingStrategy";

export class TransportadoraStrategy implements ShippingStrategy{
    calculate(weight: number, distance: number): number {
         // Taxa base de R$10 + R$2 por kg + R$0.5 por km
         const baseFee = 10;
         const weightFee = weight * 2;
         const distanceFee = distance * 0.5;
         
         return baseFee + weightFee + distanceFee;
    }

}