import { Order } from '../src/Order';
import { Coupon, enType } from '../src/Coupon';
import { Item } from '../src/Item';
import { ItemDimension } from '../src/ItemDimension';

const couponNoExpireDate = new Coupon(1, 'Coupon 1', enType.VALUE, 10.00);
const couponNotExpired = new Coupon(2, 'Coupon 2', enType.VALUE, 20.00, new Date('12-20-2050'));
const couponExpired = new Coupon(3, 'Coupon 3', enType.PORCENTAGE, 5.00, new Date('12-01-2020'));

let order: Order;
let camera: Item;
let guitar: Item;
let fridge: Item;

beforeEach(() => {
    order = new Order();
    camera = new Item(1, 'Camera', 50, new ItemDimension(20, 15, 10, 1), [couponNoExpireDate, couponNotExpired, couponExpired]);
    guitar = new Item(2, 'Guitar', 70, new ItemDimension(100, 30, 10, 3));
    fridge = new Item(3, 'Fridge', 150, new ItemDimension(200, 100, 50, 40));
})

test("Should apply valid coupon", () => {
    order.addItem(camera, 1);
    order.setCoupon(couponNoExpireDate.id);
    expect(order.hasSelectedValidCoupon()).toBe(true);
})

test("Shouldn't apply expired coupon", () => {
    order.addItem(camera, 1);
    expect(() => order.setCoupon(couponExpired.id)).toThrow('Coupon is expired');
})

test("Shouldn't apply inexistent coupon", () => {
    order.addItem(camera, 1);
    expect(() => order.setCoupon(999999)).toThrow('Invalid Coupon');
})

test("Should be correct shipping price for camera", () => {
    order.addItem(camera, 1);
    expect(order.getShippingPrice()).toEqual(10);
})

test("Should be correct shipping price for guitar", () => {
    order.addItem(guitar, 1);
    expect(order.getShippingPrice()).toEqual(30);
})

test("Should be correct shipping price for fridge", () => {
    order.addItem(fridge, 1);
    expect(order.getShippingPrice()).toEqual(400);
})

test("Should be correct shipping price for many items", () => {
    order.addItem(fridge, 1);
    order.addItem(camera, 1);
    expect(order.getShippingPrice()).toEqual(410);
})

test("Should be 0 shipping price", () => {
    expect(order.getShippingPrice()).toEqual(0);
})

test("Should be minimun shipping price", () => {
    order.addItem(new Item(10, 'Caneta Azul', 1, new ItemDimension(1, 1, 1, 1)), 1);
    expect(order.getShippingPrice()).toEqual(10);
})

test("Should be total value equals", () => {
    order.addItem(fridge, 1);
    order.addItem(guitar, 1);
    expect(order.getTotal()).toEqual(220);
})

test("Should be no shipping price without itens", () => {
    expect(order.getShippingPrice()).toEqual(0);
})
