import { useRecoilValue } from 'recoil';
import { currentLoc } from 'src/state/navibar';
import { NaviContainer, NavBarLayout } from 'src/styles/compoStyles/navBarStyle';
import Link from 'next/link';

const NavBar = () => {
	const loc = useRecoilValue(currentLoc);

	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					<div className={loc === '/' ? 'selectedColor' : 'defaultColor'}>
						<Link href='/' style={{ textDecoration: 'none' }}>
							<div className='white'>홈</div>
						</Link>
					</div>

					<div className={loc === '/map' ? 'selectedColor' : 'defaultColor'}>
						<Link href='/map' style={{ textDecoration: 'none' }}>
							<div className='white'>지도</div>
						</Link>
					</div>

					<div className={loc === '/search' ? 'selectedColor' : 'defaultColor'}>
						<Link href='/search' style={{ textDecoration: 'none' }}>
							<div className='white'>검색</div>
						</Link>
					</div>

					<div className={loc === '/popular' ? 'selectedColor' : 'defaultColor'}>
						<Link href='/popular' style={{ textDecoration: 'none' }}>
							<div className='white'>진행중인 전시회</div>
						</Link>
					</div>
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
