export enum enType {
    PORCENTAGE = 'porcentage',
    VALUE = 'value'
}

export class Coupon {
    constructor(readonly id: number, readonly code: string, readonly type: enType, readonly value: number, readonly expire_at?: Date) { }

    isExpired(today: Date = new Date()) {
        if (!this.expire_at) return false;
        return this.expire_at.getTime() < today.getTime();
    }
}