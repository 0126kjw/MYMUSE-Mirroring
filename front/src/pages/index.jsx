import Main from '../component/Main';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import SelectedMapState from 'src/state/selectedMap';
import { useEffect } from 'react';
//for Seo
import SeoData from 'src/lib/seoData';
import Seo from 'src/component/Seo';

const Home = () => {
	const PageData = SeoData.Main;
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<>
			<Seo title={PageData.title} description={PageData.description} ogUrl={PageData.ogUrl} />
			<Main />
		</>
	);
};

export default Home;
