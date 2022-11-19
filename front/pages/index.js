import Link from 'next/link'
import NavBar from '../component/navBar'
import SearchBoxMain from '../component/searchBoxMain'
import AiBot from '../component/aiBot'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<h1>MyMuse</h1>
            <NavBar></NavBar>
            <SearchBoxMain></SearchBoxMain>
            <h3>슬라이더</h3>
            <AiBot></AiBot>
		</div>
	)
}
