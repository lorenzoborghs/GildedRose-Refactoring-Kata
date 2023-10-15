import {
  Item,
  ItemType,
  NormalItem,
  AgedItem,
  LegendaryItem,
  PassItem,
  ConjuredItem,
} from '..';

export function updateItem(item: Item): Item {
  switch (getItemType(item)) {
    case ItemType.AGED:
      return new AgedItem(item).update();
    case ItemType.PASS:
      return new PassItem(item).update();
    case ItemType.LEGENDARY:
      return new LegendaryItem(item).update();
    case ItemType.CONJURED:
      return new ConjuredItem(item).update();
    default:
      return new NormalItem(item).update();
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
