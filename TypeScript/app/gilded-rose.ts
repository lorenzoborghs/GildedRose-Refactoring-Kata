import { Item } from './item';
import { NormalItem } from './item/normal-item';
import { updateItem } from './item/update';

export class GildedRose {
  items: Item[];

  constructor(items = [] as Item[]) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItem);
    return this.items;
  }
}
