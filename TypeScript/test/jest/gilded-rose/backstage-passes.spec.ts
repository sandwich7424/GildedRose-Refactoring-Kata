import { GildedRose, Item } from "@/gilded-rose";
import { gildedRoseTimeFastForward } from "./utils";

const BACKSTAGE_PASSES_ITEM_NAME = 'Backstage passes to a TAFKAL80ETC concert';

describe('Testing changes of quality', () => {
    it('Test of increase of quality more than 10 days before expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [20, 10, 10];
        const items = gildedRoseTimeFastForward(
            new Item(BACKSTAGE_PASSES_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality + daysToTest);
    });

    it('Test of increase of quality 5 to 10 days before expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [10, 0, 5];
        const items = gildedRoseTimeFastForward(
            new Item(BACKSTAGE_PASSES_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality + (2 * daysToTest));
    });

    it('Test of increase of quality 0 to 5 days before expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [5, 0, 5];
        const items = gildedRoseTimeFastForward(
            new Item(BACKSTAGE_PASSES_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality + (3 * daysToTest));
    });

    it('Test of decrease of quality after expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [0, 20, 5];
        const items = gildedRoseTimeFastForward(
            new Item(BACKSTAGE_PASSES_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(0);
    });
});

describe('Testing changes in days remaining to expiration date', () => {
    it('Test of decreasing days remaining to expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [20, 10, 10];
        const items = gildedRoseTimeFastForward(
            new Item(BACKSTAGE_PASSES_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].sellIn).toBe(remainDays - daysToTest);
    });
});