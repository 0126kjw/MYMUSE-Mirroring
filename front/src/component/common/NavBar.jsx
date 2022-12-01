import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentLoc } from 'state/navibar';
import { NaviContainer, NavBarLayout } from 'styles/compoStyles/navBarStyle';
import Link from 'next/link';

const NavBar = () => {
	const loc = useRecoilValue(currentLoc);

	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					<div>
						<Link href='/' style={{ textDecoration: 'none' }}>
							<div className={loc === '/' ? 'brown' : 'white'}>홈</div>
						</Link>
					</div>

					<div>
						<Link href='/map' style={{ textDecoration: 'none' }}>
							<div className={loc === '/map' ? 'brown' : 'white'}>
								서울 박물관 지도
							</div>
						</Link>
					</div>

					<div>
						<Link href='/search' style={{ textDecoration: 'none' }}>
							<div className={loc === '/search' ? 'brown' : 'white'}>박물관 검색</div>
						</Link>
					</div>

					<div>
						<Link href='/popular' style={{ textDecoration: 'none' }}>
							<div className={loc === '/popular' ? 'brown' : 'white'}>
								진행중인 전시회
							</div>
						</Link>
					</div>
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
