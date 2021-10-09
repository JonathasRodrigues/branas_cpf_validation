import { Coupon } from "./Coupon";
import { ItemDimension } from "./ItemDimension";

export class Item {
    id: number;
    name: string;
    price: number;
    coupons: Coupon[];
    dimension: ItemDimension;

    constructor(id: number, name: string, price: number, dimension: ItemDimension, coupons: Coupon[] = []) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.dimension = dimension;
        this.coupons = coupons;
    }
}