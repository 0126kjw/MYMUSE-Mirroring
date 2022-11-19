import Link from 'next/link'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function NavBar() {
	return (
		<div>
            <hr></hr>
			<ul>
                <h3>nav 바</h3>
				<li><Link href='/'>홈</Link></li>
				<li><Link href='/sub/search'> 검색 </Link></li>
				<li><Link href='/sub/zido'> 테스트페이지 </Link></li>
			</ul>
            <hr></hr>
		</div>
	)
}
