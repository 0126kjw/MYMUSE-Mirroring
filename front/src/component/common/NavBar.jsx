import { useRecoilValue } from 'recoil';
import { currentLoc } from 'src/state/navibar';
import { NaviContainer, NavBarLayout } from 'src/styles/compoStyles/navBarStyle';
import Link from 'next/link';

const NavBar = () => {
	const loc = useRecoilValue(currentLoc);
	const menu = [
		{ korName: '홈', route: '/' },
		{ korName: '지도', route: '/map' },
		{ korName: '검색', route: '/search' },
		{ korName: '진행중인 전시회', route: '/popular' },
	];

	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					{menu.map((item, idx) => (
						<div
							key={`pcMenu${idx}`}
							className={loc === item.route ? 'selectedColor' : 'defaultColor'}
						>
							<Link href={item.route} style={{ textDecoration: 'none' }}>
								<div className='white'>{item.korName}</div>
							</Link>
						</div>
					))}
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
