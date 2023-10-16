import { Item } from './item';
import { StockItem } from './stock-item';

export class AgedItem extends StockItem {
  update(): Item {
    this.decreaseSellIn();
    this.increaseQuality(
      this.isSellInPassed()
        ? this.DEFAULT_INCREASE_AMOUNT * 2
        : this.DEFAULT_INCREASE_AMOUNT
    );
    this.checkQuality();
    return this.item;
  }
}
