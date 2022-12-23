import { Item } from "@/items/Item";
import { MIN_QUALITY } from "@/utils/constants";
import { gildedRoseTimeFastForward } from "./utils";

const ORDINARY_ITEM_NAME = 'Ordinary Item';

describe('Testing changes of quality', () => {
    it('Test of decrease of quality before expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [20, 10, 10];
        const items = gildedRoseTimeFastForward(
            new Item(ORDINARY_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality - daysToTest);
    });

    it('Test of decrease of quality after expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [0, 10, 4];
        const items = gildedRoseTimeFastForward(
            new Item(ORDINARY_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(startQuality - (2 * daysToTest));
    });

    it('Test of possibility of decrease item quality below min level', () => {
        const [remainDays, startQuality, daysToTest] = [0, 10, 20];
        const items = gildedRoseTimeFastForward(
            new Item(ORDINARY_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].quality).toBe(MIN_QUALITY);
    });

    it('Test of decrease of quality before and after expiration date', () => {
        const [remainDays, startQuality, daysToFirstTest, daysToSecondTest] = [2, 10, 2, 4];
        let items = gildedRoseTimeFastForward(
            new Item(ORDINARY_ITEM_NAME, remainDays, startQuality),
            daysToFirstTest + daysToSecondTest
        );
        expect(items[0].quality).toBe(startQuality - daysToFirstTest - (2 * daysToSecondTest));
    })
});

describe('Testing changes in days remaining to expiration date', () => {
    it('Test of decreasing days remaining to expiration date', () => {
        const [remainDays, startQuality, daysToTest] = [20, 10, 10];
        const items = gildedRoseTimeFastForward(
            new Item(ORDINARY_ITEM_NAME, remainDays, startQuality),
            daysToTest
        );
        expect(items[0].sellIn).toBe(remainDays - daysToTest);
    });
});