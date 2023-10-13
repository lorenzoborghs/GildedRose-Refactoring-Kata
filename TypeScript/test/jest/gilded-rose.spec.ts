import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Normal items', () => {
    it('should be named correctly', () => {
      const gildedRose = new GildedRose([new Item('foo', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('foo');
    });

    it('should decrease SellIn by one', () => {
      const gildedRose = new GildedRose([new Item('foo', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it('should decrease Quality by one', () => {
      const gildedRose = new GildedRose([new Item('foo', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
    });

    it('should decrease Quality twice as fast when SellIn has passed', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it('should never have a negative Quality', () => {
      const gildedRose = new GildedRose([new Item('foo', 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Aged items', () => {
    it('should be named correctly', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Aged Brie');
    });

    it('should decrease SellIn by one', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase Quality by one', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it('should never increase Quality more than 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('should increase Quality by two when SellIn has passed', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });
  });

  describe('Legendary items', () => {
    it('should be named correctly', () => {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    });

    it('should not decrease SellIn', () => {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 10, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10);
    });

    it('should not decrease Quality', () => {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 10, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe('Backstage passes', () => {
    it('should be named correctly', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    });

    it('should decrease SellIn by one', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase Quality by one (more than 10 days in advance)', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it('should never increase Quality more than 50', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('should increase Quality by two when SellIn is nearing', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });

    it('should increase Quality by three when SellIn is less than 6', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
    });

    it('should have no Quality after SellIn has passed', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
