import { Order } from './Order';
import { ItemDimension } from './ItemDimension';
import { Item } from './Item';

export class Checkout {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, 'Camera', 50, new ItemDimension(20, 15, 10, 1)),
            new Item(2, 'Guitar', 70, new ItemDimension(100, 30, 10, 3)),
            new Item(3, 'Fridge', 150, new ItemDimension(200, 100, 50, 40))
        ]
    }

    execute(input: any): any {
        const order = new Order();
        for (const item of input.items) {
            const currentItem = this.items.find(p => p.id === item.id);
            if (!currentItem) throw new Error('Item not found');
            order.addItem(currentItem, item.quantity);
        }
        return { total: order.getTotal() }
    }

}