import { ProcessableItem } from "./interfaces/ProcessableItem";
import { AgedBrie } from "./items/AgedBrie";
import { BackstagePasses } from "./items/BackstagePasses";
import { Item } from "./items/Item";
import { OrdinaryItem } from "./items/OrdinaryItem";
import { Sulfuras } from "./items/Sulfuras";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private makeItemProcessable(item: Item): ProcessableItem {
    switch(item.name) {
      case 'Sulfuras, Hand of Ragnaros':
        return new Sulfuras(item.name, item.sellIn, item.quality);
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePasses(item.name, item.sellIn, item.quality);
      case 'Aged Brie':
        return new AgedBrie(item.name, item.sellIn, item.quality);
      default:
        return new OrdinaryItem(item.name, item.sellIn, item.quality);
    }
  }

  updateQuality() {
    this.items = this.items.map((item: Item) => this.makeItemProcessable(item).process());
    return this.items;
  }
}
