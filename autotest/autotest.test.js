const puppeteer = require('puppeteer');
const { one } = require('./index');
const confJP = require('./jest-puppeteer.config');
describe('MyTestAQA', () => {
    test(`Переходим на YouTube`, async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(`${one}`, { waitUntil: 'domcontentloaded' });
        //Ожидаем Селектор кнопки Start
        await page.waitForSelector('div#start.style-scope.ytd-masthead button.style-scope.yt-icon-button #guide-icon', {
            visible: true,
        });
        //Кликаем по ней
        await page.click('div#start.style-scope.ytd-masthead button.style-scope.yt-icon-button #guide-icon');

        await browser.close();
    });
    // test(`sss`, async () => {});
});
