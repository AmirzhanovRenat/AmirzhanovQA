module.exports = {
    launch: {
        //   dumpio: true,
        headless: !Boolean(process.env.HEAD), // если ничего нет то придет тру, если что то хоть написано придет фалс
        product: 'chrome',
        slowMo: 80, 
        defaultViewport: { width: 1920, height: 1080 },
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process', // <- this one doesn't works in Windows
            '--disable-accelerated-2d-canvas',
            '--start-maximized',
            '--ignore-certificate-errors',
        ],
       // timeout: 60000,
    },
};
