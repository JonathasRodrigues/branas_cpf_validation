export class ItemDimension {

    constructor(readonly height: number, readonly width: number, readonly length: number, readonly weight: number) {
    }

    getVolume = () => this.length / 100 * this.width / 100 * this.height / 100;

    getDensity = () => this.weight / this.getVolume();
}
