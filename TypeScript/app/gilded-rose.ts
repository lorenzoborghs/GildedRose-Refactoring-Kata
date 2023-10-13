export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != 'Aged Brie' &&
        this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        // Items other than Aged Brie or Backstage Passes
        // And that hava a Quality higher than zero
        // And are not the Legendary item
        // Decrease in Quality by one
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        // Aged Brie or Backstage passes
        // that have a Quality below 50
        // Increase Quality by one
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          // And if the item is a Backstage pass
          // Increase by one again if the Quality is less than 50 and less than 11 days away
          // Increase by one again if the Quality is less than 50 and less than 6 days away
          if (
            this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        // Items other than Legendary item
        // Decrease SellIn by one
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        // Items with a SellIn that passed
        // And is not an Aged item
        // And is not a Backstage pass
        // And it still has Quality
        // And is not the Legendary item
        // Decrease Quality by zero
        if (this.items[i].name != 'Aged Brie') {
          if (
            this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // Backstage passes become zero
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          // Aged items that have a Quality less than 50
          // Increase Quality by one
          // TODO: Check if new this new requirement.
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
