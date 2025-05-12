export interface ShippingStrategy{
    calculate(weight: number, distance: number): number;
}