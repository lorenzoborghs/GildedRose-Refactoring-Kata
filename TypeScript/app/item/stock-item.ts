import { Item } from './item';

export abstract class StockItem extends Item {
  item: Item;

  readonly MAX_QUALITY = 50;
  readonly MIN_QUALITY = 0;
  readonly DEFAULT_INCREASE_AMOUNT = 1;
  readonly DEFAULT_DECREASE_AMOUNT = 1;

  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality);
    this.item = item;
  }

  abstract update(): Item;

  decreaseSellIn() {
    this.item.sellIn--;
  }

  increaseQuality(increaseAmount: number = this.DEFAULT_INCREASE_AMOUNT) {
    this.item.quality += increaseAmount;
  }

  decreaseQuality(decreaseAmount: number = this.DEFAULT_DECREASE_AMOUNT) {
    this.item.quality -= decreaseAmount;
  }

  checkQuality() {
    this.item.quality = Math.max(this.item.quality, this.MIN_QUALITY);
    this.item.quality = Math.min(this.item.quality, this.MAX_QUALITY);
  }
}
