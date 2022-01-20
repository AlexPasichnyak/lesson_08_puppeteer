const puppeteer = require('puppeteer');

try {
  (async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/');
    await page.waitForSelector('toolbar-component');
    await page.type('input[type="search"]', 'pdf');
    await page.keyboard.press('Enter');
    await page.pdf({
      path: './screenshots/screenshot.pdf',
      format: 'a3',
      printBackground: true
    });

    await browser.close();
  })();
} catch (err) {
  console.error(err);
}
