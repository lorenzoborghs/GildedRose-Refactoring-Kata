import { Item } from './item';
import { StockItem } from './stock-item';

export class PassItem extends StockItem {
  update(): Item {
    this.decreaseSellIn();

    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    } else if (this.item.sellIn < 6) {
      this.increaseQuality(3);
    } else if (this.item.sellIn < 11) {
      this.increaseQuality(2);
    } else {
      this.increaseQuality();
    }

    this.checkQuality();
    return this.item;
  }
}
