import axios from 'axios';

const API = () => {
	// It will intercept connection from server to client and bring res.data out and return it
	// So we don't need to handling [.then()] in other files with data handling.

	//section 1, Base codes
	const instance = axios.create({
		baseURL: process.env.NEXT_PUBLIC_BASE_URL,
		//timeout ?
	});
	//instance's scope issue: API 함수 외부에 있을 때 여러번 작동함

	//console.log('interceptor(before)', interceptor);
	instance.interceptors.response.use(
		(res) => {
			return res.data;
		},
		(err) => {
			//return error and catch will get it
			return Promise.reject(err);
		},
	);

	instance.interceptors.request.use(
		(config) => {
			return config;
		},
		(err) => {
			//return error and catch will get it
			return Promise.reject(err);
		},
	);

	//console.log(interceptor);
	//get multiple param - for page
	/** *
	 * @param {*} category (exhibitions / museums )
	 * @param {*} pageNum (page number)
	 * @returns data (array) from respose.data / promise fullfiled는 interceptor에서 처리되어 res.data의 정보만 보냅니다.
	 */
	const GetPages = async (category, pageNum) => {
		const url = `${category}?page=${pageNum}`;
		return instance.get(url);
		//return instance.get(url).then((res) => res);
	};

	/**
	 * @param {*} params (array) ['map','eete123',pins]
	 * @return data (array)  from respose.data / promise fullfiled는 interceptor에서 처리되어 res.data의 정보만 보냅니다.
	 */
	//get multiple param
	const Get = async (params) => {
		const url = params.join('/');
		return instance.get(url);
		//console.log("utils/api.js: ",result);
		//return result;
	};

	//section 2. service codes

	/** *
	 * @param {*} option 구분: (exhibition/museum)
	 * @param {*} keyword 검색 키워드
	 * @returns data (array) : res.data를 전해줍니다
	 */
	const GetSearach = async (category, keyword) => {
		let option = '';
		if (category == '박물관') option = 'museum';
		if (category == '전시회') option = 'exhibition';

		const url = `search?option=${option}&keyword=${keyword}`;
		return instance.get(url);
	};

	//section 3. Chatbots
	const chatbotUrl = 'chatbots';

	//3-1 feedback (src/compo/ai/feedbackmodal.jsx)
	const PostFeedback = async (data) => {
		const url = `${chatbotUrl}/feedback`;
		return instance.post(url, data);
	};

	//3-2 userQusetion (src/comp/common/ai/ai_util/submitinput.js)
	const PostUserQuestion = async (data) => {
		return instance.post(chatbotUrl, data);
	};

	return { Get, GetPages, GetSearach, PostFeedback, PostUserQuestion };
};

export default API;
