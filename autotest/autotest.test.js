const puppeteer = require('puppeteer');

describe('MyTestAQA', () => {
    test(`Переходим на YouTube`, async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
        //Ожидаем Селектор кнопки Start
        await page.waitForSelector('div#start.style-scope.ytd-masthead button.style-scope.yt-icon-button #guide-icon', {
            visible: true,
        });
        //Кликаем по ней
        await page.click('div#start.style-scope.ytd-masthead button.style-scope.yt-icon-button #guide-icon');

        //await browser.close();
    });
    test(`sss`, async () => {
   
    });
});
