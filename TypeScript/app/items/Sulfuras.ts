import { ProcessableItem } from "@/interfaces/ProcessableItem";
import { Item } from "./Item";

export class Sulfuras extends Item implements ProcessableItem {
  process(): Item {
    return this;
  }
}