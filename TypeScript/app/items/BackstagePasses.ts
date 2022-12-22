import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { Item } from "./Item";

export class BackstagePasses extends Item implements ProcessableItem {
  process(): Item {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 0) {
      this.quality += 3
    } else {
      this.quality = 0;
    }
    this.quality = this.quality > 50 ? 50 : this.quality;
    this.sellIn--;
    return this;
  }
}