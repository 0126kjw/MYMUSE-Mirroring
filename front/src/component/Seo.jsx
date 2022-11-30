import Head from 'next/head';
//recoil
import { useRecoilValue } from 'recoil';
//recoil atom
import { currentLoc } from 'recoil/navibar';

import { useEffect, useState } from 'react';

const Seo = () => {
	//atom only using value
	const loc = useRecoilValue(currentLoc);
	//navibar's current menu
	const [pageTitle, setPageTitle] = useState(loc);
	//setting currentMenu
	useEffect(() => {
		switch (loc) {
			case 'none':
				setPageTitle('default');
			case '/':
				setPageTitle('Home');
				break;
			case '/sub/map':
				setPageTitle('Map');
				break;
			case '/sub/search':
				setPageTitle('Search');
				break;
			case '/sub/popular':
				setPageTitle('Popular');
				break;
			default:
				//details, or others...
				setPageTitle('test');
			//throw new error('UI: NavBar Error');
		}
		console.log('pageTitle: ', pageTitle);
	}, [loc]);

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='' content='' />
			<meta name='' content='' />
		</Head>
	);
};

export default Seo;
