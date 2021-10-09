import { OrderItem } from "../src/OrderItem";
import { Item } from "../src/Item";
import { ItemDimension } from "../src/ItemDimension";

test("Should create a new order item", () => {
    const quantity = 2;
    const price = 500;
    const camera = new Item(1, 'Camera', price, new ItemDimension(20, 15, 10, 1));
    const orderItem = new OrderItem(camera, quantity);
    expect(orderItem.getTotal()).toBe(1000);
});