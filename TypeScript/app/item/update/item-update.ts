import { Item } from '../item';
import { ItemType } from '../item-type';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

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
    case ItemType.CONJURED:
      updateConjuredItem(item);
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
  if (item.name.startsWith('Conjured')) {
    return ItemType.CONJURED;
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

  item.quality = Math.max(item.quality, MIN_QUALITY);
}

function updateAgedItem(item: Item) {
  item.sellIn--;
  item.quality++;

  if (item.sellIn < 0) {
    item.quality++;
  }

  item.quality = Math.min(item.quality, MAX_QUALITY);
}

function updateLegendaryItem(item: Item) {
  // Nothing should happen for now.
}

function updatePassItem(item: Item) {
  item.sellIn--;

  if (item.sellIn < 0) {
    item.quality = 0;
  } else if (item.sellIn < 5) {
    item.quality += 3;
  } else if (item.sellIn < 10) {
    item.quality += 2;
  } else {
    item.quality++;
  }

  item.quality = Math.min(item.quality, MAX_QUALITY);
}

function updateConjuredItem(item: Item) {
  item.sellIn--;
  item.quality -= 2;

  if (item.sellIn < 0) {
    item.quality -= 2;
  }

  item.quality = Math.max(item.quality, MIN_QUALITY);
}
