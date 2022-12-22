import { Item } from "./items/Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        // do nothing
      } else if (this.items[i].name === 'Aged Brie') {
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality += 2;
        } else {
          this.items[i].quality += 1;
        }
        this.items[i].quality = this.items[i].quality > 50 ? 50 : this.items[i].quality;
        this.items[i].sellIn--;
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn > 10) {
          this.items[i].quality += 1;
        } else if (this.items[i].sellIn > 5) {
          this.items[i].quality += 2;
        } else if (this.items[i].sellIn > 0) {
          this.items[i].quality += 3
        } else {
          this.items[i].quality = 0;
        }
        this.items[i].quality = this.items[i].quality > 50 ? 50 : this.items[i].quality;
        this.items[i].sellIn--;
      } else {
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality -= 2;
        } else {
          this.items[i].quality -= 1;
        }
        this.items[i].quality = this.items[i].quality < 0 ? 0 : this.items[i].quality;
        this.items[i].sellIn--;
      }
    }

    return this.items;
  }
}
