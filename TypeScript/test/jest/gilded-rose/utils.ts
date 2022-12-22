import { GildedRose, Item } from "@/gilded-rose";

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export function gildedRoseTimeFastForward(item: Item, days: number) {
    const gildedRose = new GildedRose([item]);
    for(let i = 1; i < days; i++) {
        gildedRose.updateQuality();
    }
    return gildedRose.updateQuality();
}