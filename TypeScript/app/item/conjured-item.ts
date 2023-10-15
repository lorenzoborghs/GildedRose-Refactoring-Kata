import { Item } from './item';
import { StockItem } from './stock-item';

export class ConjuredItem extends StockItem {
  update(): Item {
    this.decreaseSellIn();
    this.decreaseQuality(
      this.item.sellIn < 0
        ? this.DEFAULT_DECREASE_AMOUNT * 4
        : this.DEFAULT_DECREASE_AMOUNT * 2
    );
    this.checkQuality();
    return this.item;
  }
}
