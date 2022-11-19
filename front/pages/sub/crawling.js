import Link from 'next/link'

// http://mticket.interpark.com/Ranking/RankList?pKind=01008&pCate=RK711

export default function Crawling() {

    const axios = require("axios");
    const cheerio = require("cheerio");

    const getHtml = async () => {
        try {
            return await axios.get("http://mticket.interpark.com/Ranking/RankList?pKind=01008&pCate=RK711");
        } catch (error) {
            console.error(error);
        }
    };

    const parsing = async () => {
        const html = await getHtml();
        const $ = cheerio.load(html.data)
        const $ul = $('ul:nth-child(2)')
        console.log($ul)
        // const $main = $('main')
        // const test = $main.classList
        // console.log($main[0].children[7].children[3])
        // console.log($main[0].children[7].children[3].children[3])
        // console.log($main[0].children[7].children[3].children[3].children[3])
        // console.log($main[0].children[7].children[3].children[3].children)

        // let items = [];
        // $ul.each((idx, node)=>{
        //     const title = $(node).find('li').text()
        //     console.log(title)
        // })

        // allListWrap
        // col imgWrap 안에 있는 게 이미지
        // h3 안에 있는 게 제목
    }

    parsing()

    // .then(html => {
    //     console.log('hello')
    //     console.log(html)
    //     let ulList = [];
    //     const $ = cheerio.load(html.data);
    //     const $bodyList = $("ul.row1").children("li")
    //     $bodyList.each(function(i, elem) {
    //     ulList[i] = {
            
    //         title: $(this).find('div.list_title a').text(),
    //         url: 'search.naver.com/search.naver'+$(this).find('div.list_title a').attr('href'),
    //         image_url: $(this).find('div.list_thumb a img').attr('src'),
    //         image_alt: $(this).find('div.list_thumb a img').attr('alt'),
    //         };
    //     });
    //     const data = ulList.filter(n => n.title);
    //     return data;
    // })
    // .then(res => {
    //     console.log(res)
    //     document.write(res)
    // });

	return (
		<>
			<h1>/pages/sub/index.js</h1>
			<Link href='/'>/pages/index.js</Link>
            <div>hello world</div>
		</>
	)
}
