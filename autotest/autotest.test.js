const puppeteer = require('puppeteer');
//npm run autotest

jest.setTimeout(60000);
describe('MyTestAQA', () => {
    test(`Переходим на tages`, async () => {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 100,

            defaultViewport: { width: 1920, height: 1080 },
            args: [
                '--no-first-run',
                '--no-sandbox',
                '--no-zygote',
                '--single-process', // <- this one doesn't works in Windows
                '--disable-accelerated-2d-canvas',
                '--start-maximized',
                '--ignore-certificate-errors',
            ],
        });

        const page = await browser.newPage();
        const url = 'https://tages.ru/';
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // О компаниии
        let aboutCompany = await page.$$('[href="/about"]');
        await aboutCompany[0].click();

        //academy
        let academy = await page.$$('[href="/academy"]');
        await academy[0].click();
        //events
        let events = await page.$$('[href="/events"]');
        await events[0].click();

        //  Blog
        await page.goto('https://tages.ru/blog/');

        // vacancies;
        let vacancies = await page.$$('[href="/vacancies"]');
        await vacancies[0].click();

        //contacks
        await page.waitForSelector('[href="/contacts"]');
        let contacks = await page.$$('[href="/contacts"]');
        await contacks[0].click();

        let head = await page.waitForSelector('.header__logo');
        await head.click();

        //form
        let form = await page.$$eval('.link.section-promo__call-to-action-link', (element) => {
            return element[0].href;
        });
        await page.goto(form);

        //validation
        await page.type('[placeholder="Имя*"]', 'Амиржанов Ренат');
        await page.type('[placeholder="Телефон*"]', '9277473307');
        await page.type('[placeholder="Компания"]', 'тагес');
        await page.type('[placeholder="Почта*"]', 'art56410@yandex.ru');
        await page.type('[placeholder="Комментарий"]', 'test comment');

        //click button
        await page.$('.form__send-form-button.button', (elem) => {
            return elem.click();
        });

        // expect('.form__success-badge-title'.innerHTML).toEqul('Ваше обращение получено');

        await browser.close();
    });
});
