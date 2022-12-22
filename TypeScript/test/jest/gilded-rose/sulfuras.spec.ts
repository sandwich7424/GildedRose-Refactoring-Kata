import { Item } from "@/items/Item";
import {gildedRoseTimeFastForward, MAX_QUALITY} from "./utils";

const SULFURAS_ITEM_NAME = 'Sulfuras, Hand of Ragnaros';

describe('Testing changes in days remaining to expiration day and in quality', () => {
    it('Test of nondecreasing days remaining to expiry date and quality', () => {
        const [remainDays, startQuality, daysToTest] = [5, 10, 10];
        const items = gildedRoseTimeFastForward(
            new Item(SULFURAS_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality);
        expect(items[0].sellIn).toBe(remainDays);
    });

    it('Test of nondecreasing quality when its above max level of quality', () => {
        const [remainDays, startQuality, daysToTest] = [5, MAX_QUALITY + 1, 10];
        const items = gildedRoseTimeFastForward(
            new Item(SULFURAS_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality);
    })
});