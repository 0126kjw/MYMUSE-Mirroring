import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

import { Wrap } from 'src/styles/common';
import { UnderDevSection } from 'src/styles/compoStyles/underDev';
import Index from 'src/component/detail/Index';

// state
import { useSetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import { currentLoc } from 'src/state/navibar';
import CurrentMapState from 'src/state/currentMap';
import SearchAgainState from 'src/state/searchAgain';

import { createBrowserHistory } from 'history';

import { useRouter, history } from 'next/router';
import { useEffect } from 'react';
//import axios from 'axios';
//import { Get } from 'src/utils/api';
//for seo
import withGetServerSideProps from 'src/hocs/withServersideProps';

const DetailTitle = styled.div`
	//position: relative;
	//padding-top: 50px;
	//padding-bottom: 50px;

	position: sticky;
	top: 0px;

	width: 100%;

	list-style: none;

	padding-top: 40px;
	padding-bottom: 30px;

	z-index: 1;

	color: ${cssUnit.colors.White};
	font-size: ${cssUnit.fontSize.medium};
	text-align: center;
	line-height: 50px;

	background-color: ${cssUnit.colors.Black};

	/* @media screen and (max-width: 599px) {
		height: ${(props) => {
		return props.size ? props.size : '100%';
	}};
		:nth-of-type(2),
		:nth-of-type(3),
		:nth-of-type(4) {
			padding-top: 70px;
			padding-bottom: 100px;
		}
	} */

	//font-family: ${cssUnit.fontFamily.NanumM};
	//font-weight: 700;

	li {
		//position: relative;

		:after {
			content: '';
			display: block;
			position: absolute;

			width: 20vw;
			height: 0.5px;

			top: 70%;
			left: 40%;

			border-bottom: 5px solid ${cssUnit.colors.DarkGold};
		}
	}
`;
const DetailContainer = styled.div`
	margin: 0px auto;
	background-color: ${cssUnit.colors.DeepBlack};
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	.detailBackground {
		background-color: ${cssUnit.backgroundColors.White};
	}
`;

const Detail = ({ item }) => {
	//console.log ('디테일에서 item', item);
	const router = useRouter();
	const setLoc = useSetRecoilState(currentLoc);
	const [currentMap, setCurrentMap] = useRecoilState(CurrentMapState);
	const [searchAgain, setSearchAgain] = useRecoilState(SearchAgainState);

	useEffect(() => {
		// 지도 처리
		setLoc(router.pathname);
		setCurrentMap({
			mapKind: 'outer',
			name: '',
		});

		// item이 없거나 404를 보낼 때 (=쿼리가 제대로 된 범위에 없을 때 item은 withSer..에서 404를 받는다.)
		if (!item || item === '404') {
			router.push(`/404`);
			return;
		}

		// 최근 페이지
		const curId = router.query.id;
		if (0 < curId && curId < 128) {
			renewWatched();
			return;
		}
	}, []);

	const history = createBrowserHistory();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// 뒤로가기 시 전역값 설정함
			const listenBackEvent = () => {
				// 뒤로가기 할 때 수행할 동작
				if (history.location.pathname == '/search') {
					// 돌아갈 페이지가 search면 글로벌 스테이트 주기
					setSearchAgain({
						...searchAgain,
						needed: true,
					});
				}
			};
			const unlistenHistoryEvent = history.listen(({ action }) => {
				if (action === 'POP') {
					listenBackEvent();
				}
			});
			return unlistenHistoryEvent;
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
	//renewWatched(); -> Error: localStorage is not defined

	return (
		<>
			{item && (
				<>
					<DetailTitle>
						<li>{item.name}</li>
					</DetailTitle>
					<DetailContainer>
						{/* <div className='detailTitle'>
				<li>{item.name}</li>
			</div> */}
						<div className='detailBackground'>
							<Wrap>
								<UnderDevSection>
									<Index item={item} />
								</UnderDevSection>
							</Wrap>
						</div>
					</DetailContainer>
				</>
			)}
		</>
	);
};

export default Detail;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	// const id = context.resolvedUrl

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
