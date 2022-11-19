const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const url  = 'http://mticket.interpark.com/Ranking/RankList?pKind=01008&pCate=RK711'
const path = '.allListWrap'

const crawler = async (target) => {
    try { 

        // 전체 페이지 받아오기
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const content = await page.content(); 

        await page.close();
        await browser.close();

        await page.$eval(
            `.allListWrap`, (el) => console.log(el.textContent)
        );
        // const $ = cheerio.load(content);
        // console.log($.load)

        // const result = [];
        // const $data = cheerio.load(path);
        


        return Promise.resolve(result);
    } catch (err) {
        return Promise.reject([]);
    }
};

crawler()

// module.exports = {
//     crawler,
// };