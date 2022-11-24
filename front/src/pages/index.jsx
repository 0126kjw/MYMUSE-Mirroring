// component
// import SearchBar from '../component/searchBar'
// import Slider from '../component/slider'
// import { Header, Footer, NavBar, AiBot } from 'Component/common'

import Main from '../component/main';
import Head from 'next/head';
import styled from '@emotion/styled';

// const IndexLayout = styled.div`
// 	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
// 	margin: 0px auto;
// 	main {
// 		text-align: center;
// 	}
// 	font-family: 'Noto serif KR', sans-serif;
// 	font-weight: bold;
// 	font-size: 25px;
// 	max-width: 1600px;
// `

export default function Home() {
	return (
		<>
			<Head></Head>
			<Main />
			{/* <IndexLayout>
			</IndexLayout> */}
		</>
	);
}
