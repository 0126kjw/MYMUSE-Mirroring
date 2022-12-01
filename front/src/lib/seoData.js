const SeoData = {
	Main: {
		title: 'MyMuse: 홈',
		description: '한곳에서 보는 온라인 AI 전시정보 팜플렛',
		ogUrl: process.env.BASE_URL + '/',
	},
	Map: {
		title: 'MyMuse: 지도',
		description: '한곳에서 보는 온라인 AI 전시정보 팜플렛',
		ogUrl: process.env.BASE_URL + '/sub/map',
	},
	Search: {
		title: 'MyMuse: 검색',
		description: '한곳에서 보는 온라인 AI 전시정보 팜플렛',
		ogUrl: process.env.BASE_URL + '/sub/search',
	},
	Popular: {
		title: 'MyMuse: 진행중인 전시회',
		description: '한곳에서 보는 온라인 AI 전시정보 팜플렛',
		ogUrl: process.env.BASE_URL + '/sub/popluar',
	},
};

export default SeoData;
