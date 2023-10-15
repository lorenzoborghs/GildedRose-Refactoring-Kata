import { Item } from './item';
import { StockItem } from './stock-item';

export class LegendaryItem extends StockItem {
  update(): Item {
    return this.item;
  }
}
