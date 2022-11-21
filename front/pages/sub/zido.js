
import Header from '../../component/header'
import SeoulZido from '../../component/seoulZido'
import AiBot from '../../component/aiBot'
import Footer from '../../component/footer'
import styled from '@emotion/styled'

import Link from 'next/link'
import Head from 'next/head'

const ZidoSearchLayout = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
    margin:0px auto;
    main{
        text-align:center;
    }
    font-family: 'Noto serif KR', sans-serif;
    font-weight : bold;
    font-size:25px;
    max-width:1600px;
    background-color:black;
`

export default function Zido() {

	return (
        <ZidoSearchLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap" rel="stylesheet"></link>
            </Head>
            <Header/>
            <SeoulZido/>
            <Footer/>
            <AiBot/>
        </ZidoSearchLayout>
	)
}
