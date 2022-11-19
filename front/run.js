const puppeteer = require('puppeteer');
const func = async () => {
    
    const browser = await puppeteer.launch({ 
        defaultViewport : {
            width: 1920,
            height: 1080
        }        
        });

    const page = await browser.newPage(); 
    await page.goto('http://mticket.interpark.com/Ranking/RankList?pKind=01008&pCate=RK711');
    await page.waitForSelector('.allListWrap'); // 요소 로딩 대기
    let txt = await page.$eval('.allListWrap', x => x.innerHTML);

    console.log()
    let result = []

    const getStartPoint = (뒤, i) => {
        while(true){
            if(txt[--i] == '>'){
                return i+1
            }
        }
    }
    while(true){
        const 뒤 = txt.indexOf(`</h3>`)
        txt = txt.replace('</h3>', '.');

        if(뒤 < 0) break; // 더이상 나오는 값이 없으면 break
    
        let i = 뒤
        const 앞 = getStartPoint(뒤, i)
        
        // 뒤부터 앞까지의 문자열 push
        console.log(txt.slice(앞,뒤))
        formerLoc = 뒤

    }
    
    await browser.close();
}

func()

// <간단 명세>

// 크롤링을 처음 테스트 해본 코드입니다.

// 전시회 이미지, 이름, 전시 날짜 등을 받을 예정인데
// 우선 전시회 명칭을 받아오는 연습을 해 보았습니다.

// 코드는
// <h3 onClick...> TEXT </h3> 
// 형식에서 TEXT 를 받아오는 내용입니다.
// </h3>를 찾아 꺽쇠 이전까지의 값을 받아오는 방식으로 시도해 보았습니다.