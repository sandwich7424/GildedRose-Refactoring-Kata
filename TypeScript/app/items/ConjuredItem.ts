import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { MIN_QUALITY } from "@/utils/constants";
import { Item } from "./Item";
import { OrdinaryItem } from "./OrdinaryItem";

export class ConjuredItem extends Item implements ProcessableItem {
  
    private updateQuality() {
      if (this.sellIn <= 0) {
        this.quality -= 2 * OrdinaryItem.qualityChangeAfterExp;
      } else {
        this.quality -= 2 * OrdinaryItem.qualityChangeBeforeExp;
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