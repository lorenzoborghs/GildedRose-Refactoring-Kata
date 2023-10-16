import { StockItem } from './stock-item';

export class NormalItem extends StockItem {
  update() {
    this.decreaseSellIn();
    this.decreaseQuality(
      this.isSellInPassed()
        ? this.DEFAULT_DECREASE_AMOUNT * 2
        : this.DEFAULT_DECREASE_AMOUNT
    );
    this.checkQuality();
    return this.item;
  }
}
