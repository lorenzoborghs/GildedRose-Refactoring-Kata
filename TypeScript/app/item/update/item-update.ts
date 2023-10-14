import { Item } from '../item';
import { ItemType } from '../item-type';

export function updateItem(item: Item) {
  switch (getItemType(item)) {
    case ItemType.AGED:
      updateAgedItem(item);
      break;
    case ItemType.LEGENDARY:
      updateLegendaryItem(item);
      break;
    case ItemType.PASS:
      updatePassItem(item);
      break;
    default:
      updateNormalItem(item);
  }
}

function getItemType(item: Item): ItemType {
  if (item.name.startsWith('Backstage passes')) {
    return ItemType.PASS;
  }
  if (item.name.startsWith('Aged')) {
    return ItemType.AGED;
  }
  if (item.name === 'Sulfuras, Hand of Ragnaros') {
    return ItemType.LEGENDARY;
  }
  return ItemType.NORMAL;
}

function updateNormalItem(item: Item) {
  item.sellIn--;
  item.quality--;

  if (item.sellIn < 0) {
    item.quality--;
  }

  item.quality = Math.max(item.quality, 0);
}

function updateAgedItem(item: Item) {
  item.sellIn--;
  item.quality++;

  if (item.sellIn < 0) {
    item.quality++;
  }

  item.quality = Math.min(item.quality, 50);
}

function updateLegendaryItem(item: Item) {
  // Nothing should happen for now.
}

function updatePassItem(item: Item) {
  item.sellIn--;

  if (item.sellIn < 0) {
    item.quality = 0;
  } else if (item.sellIn < 6) {
    item.quality += 3;
  } else if (item.sellIn < 11) {
    item.quality += 2;
  } else {
    item.quality++;
  }

  item.quality = Math.min(item.quality, 50);
}
