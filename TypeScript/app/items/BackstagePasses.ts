import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { MAX_QUALITY } from "@/utils/constants";
import { Item } from "./Item";

export class BackstagePasses extends Item implements ProcessableItem {

  private updateQuality() {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.quality = Math.min(this.quality, MAX_QUALITY);
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