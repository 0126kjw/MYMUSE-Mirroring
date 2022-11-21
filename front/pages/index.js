// component
import SearchBar from '../component/searchBar'
import AiBot from '../component/aiBot'
import Slider from '../component/slider'
import Footer from '../component/footer'
import Header from '../component/header'

import Head from 'next/head'
import styled from '@emotion/styled'

const IndexLayout = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
    margin:0px auto;
    main{
        text-align:center;
    }
    font-family: 'Noto serif KR', sans-serif;
    font-weight : bold;
    font-size:25px;
    max-width:1600px;
`

export default function Home() {
	return (
        
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap" rel="stylesheet"></link>
            </Head>

            <IndexLayout>
                <Header/>
                <main>
                    <SearchBar></SearchBar>
                    <Slider></Slider>
                    <AiBot></AiBot>
                </main>
                <Footer></Footer>

            </IndexLayout>
        </>
	)
}
