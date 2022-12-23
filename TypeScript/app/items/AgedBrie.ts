import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { Item } from "./Item";

export class AgedBrie extends Item implements ProcessableItem {

  private updateQuality() {
    if (this.sellIn <= 0) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }
    this.quality = Math.min(this.quality, 50);
  }

  private updateSellIn() {
    this.sellIn--;
  }

  process(): Item {
    this.updateQuality();
    this.updateSellIn();
    return this;
  }
}