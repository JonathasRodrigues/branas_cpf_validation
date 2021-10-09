import { Item } from './Item';

export class OrderItem {
    item: Item;
    quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }

    getTotal = () => this.item.price * this.quantity;
}