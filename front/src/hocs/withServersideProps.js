//context에서 받아온 pagePath와 링크하기 위한 객체
const path = {
	HOME: '/',
	MAP: '/map',
	SEARCH: '/search',
	POPULAR: '/popular',
	DETAIL: `/detail/*`,
};

const getTitleByPath = {
	[path.HOME]: '홈',
	[path.MAP]: '지도',
	[path.SEARCH]: '검색',
	[path.POPULAR]: '인기 전시회',
	[path.DETAIL]: '상세정보',
};

const getDescByPath = {
	[path.HOME]: '메인 화면 입니다.',
	[path.MAP]: '서울 시내 박물관/전시관을 검색할 수 있는 지도 페이지 입니다.',
	[path.SEARCH]: '박물관/전시관을 검색할 수 있는 페이지 입니다.',
	[path.POPULAR]: '인기 전시회를 볼 수 있는 페이지 입니다.',
	[path.DETAIL]: '상세정보를 볼 수 있는 페이지 입니다.',
};

/**
 *
 * @param {
 * } context : getServerSideProps
 */
const withGetServerSideProps = (getServerSideProps) => {
	return async (context) => {
		const pagePath = context.resolvedUrl;
		//console.log('with.js: ', pagePath);
		return await getServerSideProps(context).then((res) => {
			console.log('context', context);
			return {
				...res,
				props: {
					...res.props,
					pagePath,
					pageTitle: getTitleByPath[pagePath],
					pageDesc: getDescByPath[pagePath],
				},
			};
		});
	};
};

export default withGetServerSideProps;
