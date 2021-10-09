import { Coupon, enType } from "../src/Coupon"

test("Should create a coupon", () => {
    const coupon = new Coupon(1, 'Coupon Teste', enType.VALUE, 10);
    expect(coupon.code).toBe('Coupon Teste');
})

test("Should be a valid coupon", () => {
    const coupon = new Coupon(2, 'Coupon Teste 2', enType.VALUE, 10, new Date('12-01-2100'));
    expect(coupon.isExpired()).toBe(false);
})