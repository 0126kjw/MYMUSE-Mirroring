import { Get } from 'src/utils/api';
//getserversideprops(쿼리가 제대로 맞을때)에서 쓰이는 axios 함수

import { IdBook } from 'src/data/idBook';
const numsOfMuseums = IdBook.length;
//박물관 리스트의 갯수를 받아와서 쿼리의 검증에 쓰입니다.

/** context에서 받아온 pagePath와 링크하기 위한 객체 셋 */
const path = {
	HOME: '/',
	MAP: '/map',
	SEARCH: '/search',
	POPULAR: '/popular',
	//DETAIL: `/detail/`,
	ERROR404: `/404`,
};
const getTitleByPath = {
	[path.HOME]: '홈',
	[path.MAP]: '지도',
	[path.SEARCH]: '검색',
	[path.POPULAR]: '인기 전시회',
	//[path.DETAIL]: '상세정보',
	[path.ERROR404]: '404 에러',
};
const getDescByPath = {
	[path.HOME]: '메인 화면 입니다.',
	[path.MAP]: '서울 시내 박물관/전시관을 검색할 수 있는 지도 페이지 입니다.',
	[path.SEARCH]: '박물관/전시관을 검색할 수 있는 페이지 입니다.',
	[path.POPULAR]: '인기 전시회를 볼 수 있는 페이지 입니다.',
	//[path.DETAIL]: '상세정보를 볼 수 있는 페이지 입니다.',
	[path.ERROR404]: '404 에러 페이지 입니다.',
};

/**
 *
 * @param {
 * } context : getServerSideProps
 */
const withGetServerSideProps = (getServerSideProps) => {
	return async (context) => {
		const pagePath = context.resolvedUrl;

		const detailQueryId = context.query.id;
		// console.log('context.query', detailQueryId);
		// console.log('numsOfMuseums', numsOfMuseums);
		// console.log('type context.query', typeof detailQueryId);
		// console.log('parseInt', detailQueryId)

		//숫자만 가졌는지 체크하는 함수
		const digitsOnlyChecking = (string) => {
			return [...string].every((c) => '0123456789'.includes(c));
		};

		//[1] 쿼리가 존재하고 숫자만 가지고 있는가?
		if (detailQueryId !== undefined && digitsOnlyChecking(detailQueryId)) {
			//console.log('1.쿼리가 존재하니?,', detailQueryId);
			//console.log('2. 숫자만 가졌니?', digitsOnlyChecking(detailQueryId));

			//console.log('1과 2가 통과되면 정수로 바꿔준다.');
			const intDetailQueryId = parseInt(detailQueryId);

			//[2]쿼리가 제대로 된 범위에 있는가?
			if (intDetailQueryId > 0 && intDetailQueryId <= numsOfMuseums) {
				// console.log('3. 쿼리가 제대로 된 범위에 있는가?',
				// 	intDetailQueryId > 0 && intDetailQueryId <= numsOfMuseums,
				// );

				//[3] 검증을 통과하면 여기서 get으로 정보를 받아온다.
				return await getServerSideProps(context).then(async (res) => {
					try {
						const item = await Get(['museums', intDetailQueryId]);
						const pagePath = `detail/${intDetailQueryId}`;
						const pageTitle = item.name;
						const pageDesc = `${item.name}의 상세 페이지입니다.`;

						const sliderimgs = [
							`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${intDetailQueryId}_image01.jpg`,
							`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${intDetailQueryId}_image02.jpg`,
						];

						const pageData = { item, sliderimgs };

						return {
							...res,
							props: {
								pagePath,
								pageTitle,
								pageDesc,
								pageData,
							},
						};
					} catch (err) {
						console.log(err);
						return {
							props: {},
						};
					}
				});
			} else {
				//[3]쿼리가 존재하며 정수이지만 범위가 올바르지 않을 때(음의 정수/오버된 쿼리 처리)
				//console.log('숫자 쿼리가 있는데 숫자가 미만/오버된 경우(없는 페이지로 가려고 할 때');
				return await getServerSideProps(context).then(async (res) => {
					//console.log('범위 외 쿼리받음.');
					const item = '404';
					const pagePath = `/404`;
					const pageTitle = 'Page Not Found';
					const pageDesc = `에러 페이지 입니다.`;
					const pageData = { item };

					return {
						props: {
							pagePath,
							pageTitle,
							pageDesc,
							pageData,
						},
					};
				});
			}
		}
		//Errors List
		//쿼리는 있는데 정수만 가지고 있는게 아닌 경우 (ex: 60abc)의 에러처리
		if (detailQueryId !== undefined && !digitsOnlyChecking(detailQueryId)) {
			return await getServerSideProps(context).then(async (res) => {
				const item = '404';
				const pagePath = `/404`;
				const pageTitle = 'Page Not Found';
				const pageDesc = `에러 페이지 입니다.`;
				const pageData = { item };

				return {
					props: {
						pagePath,
						pageTitle,
						pageDesc,
						pageData,
					},
				};
			});
		}
		if (detailQueryId === undefined) {
			return await getServerSideProps(context).then((res) => {
				try {
					return {
						...res,
						props: {
							...res.props,
							pagePath,
							pageTitle: getTitleByPath[pagePath],
							pageDesc: getDescByPath[pagePath],
						},
					};
				} catch (err) {
					console.log(err);
				}
			});
		}
	};
};

export default withGetServerSideProps;
