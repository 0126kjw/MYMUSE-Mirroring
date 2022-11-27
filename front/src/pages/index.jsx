import Main from '../component/Main';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useEffect } from 'react';

export default function Home() {
	const [selectedMapState, setSelectedMapState] =
		useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<>
			<Head></Head>
			<Main />
		</>
	);
}
