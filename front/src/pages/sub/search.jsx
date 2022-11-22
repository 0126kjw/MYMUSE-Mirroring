// components
import NavBar from '../../component/common/navBar'
import SearchBar from '../../component/searchBar'
import AiBot from '../../component/common/aiBot'
import Header from '../../component/common/header'
import Footer from '../../component/common/footer'

import Head from 'next/head'
import styled from '@emotion/styled'

// max-width:1600px;

const SearchpageLayout = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');

	margin: 0px auto;
	main {
		text-align: center;
	}
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;
	max-width: 1600px;
`

export default function Search() {
	return (
		<SearchpageLayout>
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

			<SearchBar></SearchBar>
			<AiBot></AiBot>
		</SearchpageLayout>
	)
}
