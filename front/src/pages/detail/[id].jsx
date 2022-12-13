import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

import { Wrap } from 'src/styles/common';
import { UnderDevSection } from 'src/styles/compoStyles/underDev';
import Index from 'src/component/detail/Index';

// recoil state
import { useSetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import { currentLoc } from 'src/state/navibar';
import SelectedMapState from 'src/state/selectedMap';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import axios from 'axios';
//import { Get } from 'src/utils/api';

//for seo
import withGetServerSideProps from 'src/hocs/withServersideProps';
// wrap all
const DetailContainer = styled.div`
	margin: 0px auto;
	background-color: ${cssUnit.colors.DeepBlack};
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	.detailTitle {
		position: relative;
		text-align: center;
		line-height: 50px;
		padding-top: 50px;
		padding-bottom: 50px;

		color: ${cssUnit.colors.White};

		width: 100%;
		font-size: ${cssUnit.fontSize.medium};
	}
	.detailBackground {
		background-color: ${cssUnit.backgroundColors.White};
	}
`;

const Detail = ({ item }) => {
	//console.log('디테일에서 item', item);
	const router = useRouter();
	const setLoc = useSetRecoilState(currentLoc);
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);

	useEffect(() => {
		if (item === '404') {
			router.push(`/404`);
			return;
		}
	}, []);

	useEffect(() => {
		setLoc(router.pathname);
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);
	useEffect(() => {
		if (item === '404') {
			return;
		}
		let arr = localStorage.getItem('watched');
		if (arr == null) {
			arr = [];
		} else {
			arr = JSON.parse(arr);
		}
		arr.push(item.name);
		arr = new Set(arr);
		arr = [...arr];
		localStorage.setItem('watched', JSON.stringify(arr));
	}, []);

	return (
		<DetailContainer>
			<div className='detailTitle'> 박물관 상세설명 </div>
			<div className='detailBackground'>
				<Wrap>
					<UnderDevSection>
						<Index item={item} />
					</UnderDevSection>
				</Wrap>
			</div>
		</DetailContainer>
	);
};

export default Detail;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	return {
		props: {},
	};
});

// // //id 단독
// export async function getServerSideProps(context) {
// 	console.log('단독 context', context);
// 	const id = context.params.id;
// 	//const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/museums/${id}`;
// 	//const res = await axios.get(apiUrl);
// 	//const data = res.data;

// 	const item = await Get(['museums', id]);

// 	const pagePath = `detail/${id}`;
// 	const pageTitle = item.name;
// 	const pageDesc = `${item.name}의 상세 페이지입니다.`;

// 	return {
// 		props: {
// 			//item: data,
// 			...context.props,
// 			pagePath,
// 			pageTitle,
// 			pageDesc,
// 			item,
// 		},
// 	};
// }
