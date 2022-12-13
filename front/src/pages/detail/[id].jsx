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
import axios from 'axios';

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
		if (!item) {
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
	renewWatched();

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
// export const getServerSideProps = withGetServerSideProps(async (context) => {
// 	return {
// 		props: {},
// 	};
// });

export async function getServerSideProps(context) {
	const id = context.params.id;
	const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/museums/${id}`;
	const res = await axios.get(apiUrl);
	const data = res.data;

	return {
		props: {
			item: data,
		},
	};
}
