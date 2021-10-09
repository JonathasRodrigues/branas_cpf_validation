
import { Coupon } from './Coupon';
import { OrderItem } from './OrderItem';
import { Item } from './Item';

const distance = 1000;

export class Order {
    items: OrderItem[];
    coupon?: Coupon;

    constructor(readonly issueDate: Date = new Date()) {
        this.items = [];
    }

    setCoupon = (coupon: number) => {
        const coupons = this.getCoupons();
        let cp = coupons.find(c => c.id === coupon);
        if (!cp) throw new Error('Invalid Coupon');
        if (cp.isExpired()) throw new Error('Coupon is expired')
        this.coupon = cp;
    };

    addItem = (item: Item, quantity: number) => {
        this.items.push(new OrderItem(item, quantity));
    }

    hasSelectedValidCoupon = () => !!this.coupon;

    getShippingPrice = () => {
        if (!this.items.length) return 0;
        return this.items.reduce((prev, curr) => prev + this.calculateShippingPrice(curr.item), 0);
    }

    getTotal = () => this.items.reduce((prev, curr) => prev + curr.getTotal(), 0);

    private calculateShippingPrice = (item: Item) => {
        const volume = item.dimension.getVolume();
        const density = item.dimension.getDensity();
        return distance * volume * (density / 100);
    }

    private getCoupons = () => {
        const allCoupons = this.items.map(p => p.item.coupons);
        let coupons: Coupon[] = [];
        return coupons.concat.apply([], allCoupons);
    }

}