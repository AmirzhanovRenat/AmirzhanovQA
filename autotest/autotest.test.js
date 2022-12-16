const puppeteer = require('puppeteer');
const { one } = require('./index');
//const confJP = require('./jest-puppeteer.config');
describe('MyTestAQA', () => {
    test(`Переходим на amazon`, async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        //await page.tracing.start({ path: 'trace.json' });
        await page.goto('https://www.amazon.com/ref=nav_logo', { waitUntil: 'domcontentloaded' });

        //Ожидаем Селектор кнопки Start
        await page.waitForSelector('.hm-icon.nav-sprite', {
            visible: true,
        });
        //Кликаем по ней
        await page.click('.hm-icon.nav-sprite');

        //Жмем Electronics
        await page.waitForSelector('.hmenu-item .nav-sprite.hmenu-arrow-next');
        //await r.click[4]('.hmenu-item .nav-sprite.hmenu-arrow-next')

        await page.$$eval('.hmenu-item .nav-sprite.hmenu-arrow-next', (elements) => {
            return elements[4].click();
        });
        // await page.tracing.stop();

        await page.waitForSelector('.hmenu.hmenu-visible.hmenu-translateX .hmenu-item');

        await page.$$eval('.hmenu.hmenu-visible.hmenu-translateX .hmenu-item', (elements) => {
            return elements[8].click();
        });

        await browser.close();
    });
});
