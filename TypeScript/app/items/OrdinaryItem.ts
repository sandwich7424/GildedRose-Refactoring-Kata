import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { MIN_QUALITY } from "@/utils/constants";
import { Item } from "./Item";

export class OrdinaryItem extends Item implements ProcessableItem {

  private updateQuality() {
    if (this.sellIn <= 0) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }
    this.quality = Math.max(this.quality, MIN_QUALITY);
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