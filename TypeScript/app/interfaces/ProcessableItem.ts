import { Item } from "@/items/Item";

export interface ProcessableItem {
  process(): Item;
}