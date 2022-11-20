import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Head from 'next/head'
import Header from '../../component/header'
import AiBot from '../../component/aiBot'
import Footer from '../../component/footer'
import Details from '../../component/details'

const DetailLayout = styled.div`
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

    color:white;
`

export default function About() {

    const router = useRouter()
	const id = Number(router.query.id)

	return (
        
        <DetailLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap" rel="stylesheet"></link>
            </Head>
            
            <Header/>
            <Details 
                id = {id}
            />
            <Footer/>
            <AiBot/>
        </DetailLayout>
	)
}
