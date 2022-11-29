//for get url
import { useRouter } from 'next/router';
//for link
import Link from 'next/link';
//styling
import { NaviContainer, NavBarLayout, LinkButton } from 'styles/compoStyles/navBarStyle';
import { css } from '@emotion/react';
//recoil
import { useRecoilValue } from 'recoil';

import { useState, useEffect } from 'react';

const NavBar = () => {
	const router = useRouter();
	let currentLoc = router.pathname;

	const [page, setPage] = useState(currentLoc);

	useEffect(() => {
		switch (currentLoc) {
			case '/':
				setPage('Home');
				break;
			case '/sub/map':
				setPage('Map');
				break;
			case '/sub/search':
				setPage('Search');
				break;
			case '/sub/popular':
				setPage('Popular');
				break;
		}
	}, []);
	console.log(page);

	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					<div className='leftEnd' />
					<LinkButton href='/' style={{ textDecoration: 'none' }}>
						<span>Home</span>
					</LinkButton>
					<LinkButton href='/sub/map' style={{ textDecoration: 'none' }}>
						{' '}
						<span>Map</span>{' '}
					</LinkButton>
					<LinkButton href='/sub/search' style={{ textDecoration: 'none' }}>
						{' '}
						<span>Search</span>{' '}
					</LinkButton>
					<LinkButton href='/sub/popular' style={{ textDecoration: 'none' }}>
						{' '}
						<span>Popular</span>{' '}
					</LinkButton>
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
