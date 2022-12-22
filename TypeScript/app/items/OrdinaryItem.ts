import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { Item } from "./Item";

export class OrdinaryItem extends Item implements ProcessableItem {
  process(): Item {
    if (this.sellIn <= 0) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }
    this.quality = this.quality < 0 ? 0 : this.quality;
    this.sellIn--;
    return this;
  }
}