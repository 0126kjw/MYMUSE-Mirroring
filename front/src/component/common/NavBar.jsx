import { useState, useEffect } from 'react';
//recoil
import { useRecoilValue } from 'recoil';
//recoil atom
import { currentLoc } from 'recoil/navibar';
//styling
import { NaviContainer, NavBarLayout, LinkButton } from 'styles/compoStyles/navBarStyle';

const NavBar = () => {
	//atom only using value
	const loc = useRecoilValue(currentLoc);
	//navibar's current menu
	const [currentMenu, setcurrentMenu] = useState(loc);
	//setting currentMenu
	useEffect(() => {
		switch (loc) {
			case 'none':
				setcurrentMenu('default');
			case '/':
				setcurrentMenu('Home');
				break;
			case '/sub/map':
				setcurrentMenu('Map');
				break;
			case '/sub/search':
				setcurrentMenu('Search');
				break;
			case '/sub/popular':
				setcurrentMenu('Popular');
				break;
			default:
				//details, or others...
				setcurrentMenu('test');
			//throw new error('UI: NavBar Error');
		}
		console.log(currentMenu);
	}, [loc]);
	//console.log('currentMenu: ', currentMenu);

	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					<div className='leftEnd' />
					<LinkButton
						selected={currentMenu === 'Home'}
						href='/'
						style={{ textDecoration: 'none' }}
					>
						<span>Home</span>
					</LinkButton>

					<LinkButton
						selected={currentMenu === 'Map'}
						href='/sub/map'
						style={{ textDecoration: 'none' }}
					>
						{' '}
						<span>Map</span>{' '}
					</LinkButton>
					<LinkButton
						selected={currentMenu === 'Search'}
						href='/sub/search'
						style={{ textDecoration: 'none' }}
					>
						{' '}
						<span>Search</span>{' '}
					</LinkButton>
					<LinkButton
						href='/sub/popular'
						selected={currentMenu === 'Popular'}
						style={{ textDecoration: 'none' }}
					>
						{' '}
						<span>Popular</span>{' '}
					</LinkButton>
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
