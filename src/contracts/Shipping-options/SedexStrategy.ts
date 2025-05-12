import { ShippingStrategy } from "../ShippingStrategy";

export class SedexStrategy implements ShippingStrategy{
    calculate(weight: number, distance: number): number {
        // Taxa base de R$20 + R$3 por kg + R$0.8 por km (mais caro por ser mais rápido)
        const baseFee = 20;
        const weightFee = weight * 3;
        const distanceFee = distance * 0.8;
        
        return baseFee + weightFee + distanceFee;
    }

}