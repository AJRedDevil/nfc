const puppeteer = require('puppeteer');

const getCookie = async () => {
  let cookie = '';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Goto FPL Site
  await page.goto(process.env.FPLSITE);
  // Enter the email
  await page.type('input#ismjs-username', process.env.USERNAME);
  // Enter the password
  await page.type('input#ismjs-password', process.env.PASSWORD);

  // Click submit button
  const loginButton = 'button.ismjs-submit';
  await page.click(loginButton);

  // wait for loading page
  const chips = 'div#ismr-chips';
  await page.waitForSelector(chips);

  // cookies
  await page.cookies().then(response => {
    const finalString = response.map(item => `${item.name}=${item.value}`);
    const result = finalString.join('; ');
    cookie = result.replace('\\', '');
  });
  // close browser
  await browser.close();
  return cookie;
};

module.exports = {getCookie};
