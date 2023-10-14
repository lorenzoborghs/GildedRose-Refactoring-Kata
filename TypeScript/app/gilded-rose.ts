import { Item } from './item';
import { updateItem } from './item/update';

export class GildedRose {
  items: Item[];

  constructor(items = [] as Item[]) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      updateItem(item);
    });
    return this.items;
  }
}
