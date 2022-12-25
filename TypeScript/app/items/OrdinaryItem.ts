import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { MIN_QUALITY, QUALITY_CHANGE_BEFORE_EXP, QUALITY_CHANGE_AFTER_EXP } from "@/utils/constants";
import { Item } from "./Item";

export class OrdinaryItem extends Item implements ProcessableItem {
  private updateQuality() {
    if (this.sellIn <= 0) {
      this.quality -= QUALITY_CHANGE_AFTER_EXP;
    } else {
      this.quality -= QUALITY_CHANGE_BEFORE_EXP;
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