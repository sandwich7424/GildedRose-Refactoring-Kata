import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { MIN_QUALITY } from "@/utils/constants";
import { Item } from "./Item";

export class OrdinaryItem extends Item implements ProcessableItem {

  // TODO: Zmienić to jutro, nie podoba mi się to
  static readonly qualityChangeBeforeExp = 1;
  static readonly qualityChangeAfterExp = OrdinaryItem.qualityChangeBeforeExp * 2;

  private updateQuality() {
    if (this.sellIn <= 0) {
      this.quality -= OrdinaryItem.qualityChangeAfterExp;
    } else {
      this.quality -= OrdinaryItem.qualityChangeBeforeExp;
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