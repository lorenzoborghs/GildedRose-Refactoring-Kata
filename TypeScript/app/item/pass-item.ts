import { Item } from './item';
import { StockItem } from './stock-item';

export class PassItem extends StockItem {
  private readonly LATE_BIRD_DAY_CUTOFF = 6;
  private readonly LATE_BIRD_QUALITY_INCREASE = 3 * this.DEFAULT_INCREASE_AMOUNT;
  private readonly EARLY_BIRD_DAY_CUTOFF = 11;
  private readonly EARLY_BIRD_QUALITY_INCREASE = 2 * this.DEFAULT_INCREASE_AMOUNT;

  update(): Item {
    this.decreaseSellIn();

    if (this.isSellInPassed()) {
      this.item.quality = 0;
    } else if (this.isCloserThanSellInDays(this.LATE_BIRD_DAY_CUTOFF)) {
      this.increaseQuality(this.LATE_BIRD_QUALITY_INCREASE);
    } else if (this.isCloserThanSellInDays(this.EARLY_BIRD_DAY_CUTOFF)) {
      this.increaseQuality(this.EARLY_BIRD_QUALITY_INCREASE);
    } else {
      this.increaseQuality();
    }

    this.checkQuality();
    return this.item;
  }
}
