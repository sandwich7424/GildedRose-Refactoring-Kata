import { Item } from "@/gilded-rose";
import {gildedRoseTimeFastForward, MAX_QUALITY} from "./utils";

const AGED_BRIE_ITEM_NAME = 'Aged Brie';

describe('Testing changes of quality', () => {
    it('Test of increase of quality before expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [10, 10, 5];
        const items = gildedRoseTimeFastForward(
            new Item(AGED_BRIE_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality + daysToTest);
    });

    it('Test of increase of quality after expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [-1, 10, 5];
        const items = gildedRoseTimeFastForward(
            new Item(AGED_BRIE_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality + (daysToTest * 2));
    });

    it('Test of possibility of increase item quality above max level', () => {
        const [remainDays, startQuality, daysToTest] = [-1, MAX_QUALITY - 10, 20];
        const items = gildedRoseTimeFastForward(
            new Item(AGED_BRIE_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(MAX_QUALITY);
    });

    it('Test of increase of quality before and after expiration date', () => {
        const [remainDays, startQuality, daysToFirstTest, daysToSecondTest] = [2, 10, 2, 4];
        let items = gildedRoseTimeFastForward(
            new Item(AGED_BRIE_ITEM_NAME, remainDays, startQuality),
            daysToFirstTest + daysToSecondTest
        );
        expect(items[0].quality).toBe(startQuality + daysToFirstTest + (2 * daysToSecondTest));
    })
});

describe('Testing changes in days remaining to expiration day', () => {
    it('Test of decreasing days remaining to expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [5, 0, 10];
        const items = gildedRoseTimeFastForward(
            new Item(AGED_BRIE_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].sellIn).toBe(remainDays - daysToTest);
    });
});