import Main from '../component/Main';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import SelectedMapState from 'src/state/selectedMap';
import { useEffect } from 'react';
//for Seo

import withGetServerSideProps from 'src/hocs/withServersideProps';
const Home = () => {
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<>
			<Main />
		</>
	);
};

export default Home;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	return {
		props: {},
	};
});
