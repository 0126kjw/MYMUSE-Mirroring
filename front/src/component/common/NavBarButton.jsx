import { NaviContainer, NavBarLayout, LinkButton } from 'styles/compoStyles/navBarStyle';
//recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLoc } from 'state/navibar';
import { useState, useEffect } from 'react';

const NavBarButton = () => {
	//atom,
	const [loc, setLoc] = useRecoilState(currentLoc);
	//navibar
	const [currentMenu, setcurrentMenu] = useState(loc);

	useEffect(() => {
		console.log('loc?', loc);
		switch (loc) {
			case '/':
				setcurrentMenu('Home');
				break;
			case '/sub/map':
				console.log('loc is changed');
				setcurrentMenu('Map');
				break;
			case '/sub/search':
				setcurrentMenu('Search');
				break;
			case '/sub/popular':
				setcurrentMenu('Popular');
				break;
		}
		console.log('currentMenu: ', currentMenu);
	}, [currentMenu]);

	return (
		<>
			<LinkButton href='/' style={{ textDecoration: 'none' }}>
				<span>Home</span>
			</LinkButton>
		</>
	);
};

export default NavBarButton;
