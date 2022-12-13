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
		// 지도 처리
		setLoc(router.pathname);
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);
	//item이 없거나 404를 보낼 때 (=쿼리가 제대로 된 범위에 없을 때 item은 withSer..에서 404를 받는다.)
	useEffect(() => {
		if (!item || item === '404') {
			router.push(`/404`);
			return;
		}
	}, []);

	// 최근 페이지
	const renewWatched = () => {
		if (localStorage.getItem('watched') == null) {
			localStorage.setItem('watched', JSON.stringify([item.name]));
		} else {
			let arr = JSON.parse(localStorage.getItem('watched'));
			let isSameIncluded = false;
			let loc = -1;
			arr.forEach((ele, idx) => {
				if (ele == item.name) {
					isSameIncluded = true;
					loc = idx;
				}
			});
			// 같은 값이 들어있을땐 제거 후 맨 앞에 추가
			if (isSameIncluded) {
				arr.splice(loc, 1);
				arr.unshift(item.name);
			}
			// 3개가 다 찼을 때 맨뒤에 하나 뽑고 추가
			else if (arr.length >= 3) {
				arr.pop();
				arr.unshift(item.name);
			}
			// 그 외엔 그냥 추가
			else {
				arr.unshift(item.name);
			}
			arr = [...arr];
			localStorage.setItem('watched', JSON.stringify(arr));
		}
	};
	useEffect(() => {
		renewWatched();
		return;
	}, []);

	//renewWatched(); -> Error: localStorage is not defined

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
