import Header from '../../component/common/header'
import TestZido from '../../component/testZido'

import AiBot from '../../component/common/aiBot'
import Footer from '../../component/common/footer'
import styled from '@emotion/styled'
import Head from 'next/head'

const SubZidoLayout = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
	margin: 0px auto;
	main {
		text-align: center;
	}
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;
	max-width: 1600px;
	background-color: black;
`

export default function SubZido() {
	return (
		<SubZidoLayout>
			<Head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				></link>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			{/* <Header/> */}

			<TestZido />

			{/* <Footer/>
            <AiBot/> */}
		</SubZidoLayout>
	)
}
