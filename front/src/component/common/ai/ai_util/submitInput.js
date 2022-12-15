// library
import chat_question from 'src/component/common/ai/ai_util/chat_question';
import goToDetail from 'src/component/common/ai/ai_util/goToDetail';
import { IdBook } from 'src/data/idBook';
//import axios from 'axios';

import { PostUserQuestion } from 'src/utils/api';

// template
import template_open from 'src/component/common/ai/ai_util/template_open';
import template_ticket from 'src/component/common/ai/ai_util/template_ticket';
import template_address from 'src/component/common/ai/ai_util/template_address';

const submitInput = async (inputValue, setInputValue, router, setBotMode) => {
	if (inputValue == '') {
		alert('값을 입력해 주세요!');
		return;
	}
	const AIsec2 = document.querySelector('.AIsec2');

	// 유저 질문 띄우기
	chat_question(AIsec2, inputValue);

	// 개행 (float 때문에 필요)
	const emptyBox = document.createElement('div');
	emptyBox.classList.add('emptyBox');
	AIsec2.appendChild(emptyBox);

	// id book확인 후 단일 값은 그냥 카드 띄우기
	let checkId = '';
	for (const ele of IdBook) {
		if (ele.name == inputValue) {
			console.log(inputValue);
			checkId = ele.id;
			break;
		}
	}
	if (checkId !== '') {
		// 단일 카드 띄우고 종료
		const TempElement = document.createElement('div');
		TempElement.classList.add('msgFromAI');
		TempElement.innerText = `${inputValue}을 찾으셨나요?`;
		AIsec2.appendChild(TempElement);

		// 개행
		const emptyBox2 = document.createElement('div');
		emptyBox2.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox2);

		const singleOne = document.createElement('div');
		singleOne.classList.add('singleOne');
		singleOne.innerHTML = `
                <div className='imgBox'>
                    <img src=https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${checkId}_image01.jpg>
                    <p>${inputValue}</p>
                </div>
            `;
		singleOne.addEventListener('click', function () {
			router.push(`/detail/${checkId}`);
			setBotMode('off');
			document.querySelector('#AImodalOnBtn').style.display = 'block';
			document.querySelector('.logoTest').style.display = 'none';
		});

		AIsec2.appendChild(singleOne);

		const emptyBox = document.createElement('div');
		emptyBox.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox);
		singleOne.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		return;
	}

	// API : 유저 질문 보내고 그에 대한 response 받기
	const userQuestion = { text: inputValue };
	let data = null;
	try {
		//const post = await axios.post('http://localhost:3001/chatbots', userQuestion);
		//data = post.data;
		//console.log('data', data);
		data = await PostUserQuestion(userQuestion);
		console.log(data);
	} catch {
		console.log('posting error');
	}

	// API 리턴값 축약
	const defaultGuidance = data.fulfillmentText;
	const classification = data.displayName;
	const ans = data.intendedAnswer;

	// 답변 저장용 변수
	let infoGuide = null;
	let template = null;
	// scroll
	let scrollPoint = 0;

	// 답변 분류
	if (classification == 'DefaultFallback') {
		// 알 수 없는 질문
		infoGuide = defaultGuidance;
		scrollPoint = 1;
	} else if (classification == 'defaultWelcome') {
		// 인사
		infoGuide = defaultGuidance;
		scrollPoint = 1;
	} else if (classification == 'facilityContact') {
		// '쉼박물관 연락처 좀 줘'
		infoGuide = defaultGuidance;
		template = `${ans.contactInfo}`;
		scrollPoint = 2;
	} else if (classification == 'facilityAddress') {
		// '경운박물관 어디에 있어'
		infoGuide = defaultGuidance;
		template = template_address(ans.name, ans.newAddress, ans.oldAddress);
		scrollPoint = 2;
	} else if (classification == 'facilityOpeningHours') {
		// '경운박물관 언제 문 닫아'
		infoGuide = defaultGuidance;
		template = template_open(
			ans.name,
			ans.mon,
			ans.tue,
			ans.wed,
			ans.thu,
			ans.fri,
			ans.sat,
			ans.sun,
			ans.offday,
		);
		scrollPoint = 2;
	} else if (classification == 'facilityTicket') {
		// '경운박물관 입장료 얼마야'
		infoGuide = defaultGuidance;
		if (ans.isFree == true) {
			template = `${ans.name}(은/는) 무료입장이 가능합니다.`;
			scrollPoint = 1;
		} else {
			template = template_ticket(
				ans.name,
				ans.adultFee,
				ans.youthFee,
				ans.childFee,
				ans.feeUrl,
			);
			scrollPoint = 2;
		}
	} else if (classification == 'facilityOthers') {
		infoGuide = `${ans.name}에 대해 자세히 알아볼 수 있는 페이지를 보여드릴게요!`;
		template = `<a href='${ans.website}'>${ans.name} : ${ans.website}</a>`;
		scrollPoint = 2;
	} else if (classification == 'facilityAreaSearch') {
		// 종로구에 미술관 있어?
		infoGuide = defaultGuidance;
		scrollPoint = 3;
	} else if (classification == 'exhibitionDateSearch') {
		// 12월 에 열리는 전시회?
		infoGuide = defaultGuidance;
		scrollPoint = 3;
	}

	// <AI response (1)> 기본 info Guide
	const TempElement = document.createElement('div');
	TempElement.classList.add('msgFromAI');
	TempElement.innerText = infoGuide;
	AIsec2.appendChild(TempElement);
	// 개행
	const emptyBox2 = document.createElement('div');
	emptyBox2.classList.add('emptyBox');
	AIsec2.appendChild(emptyBox2);

	// <AI response (2)> 지역 검색
	// 지역 검색은 목록으로 표현된 값을 더해준다
	if (classification == 'facilityAreaSearch') {
		// 목록 표현
		const TempElement = document.createElement('div');
		TempElement.classList.add('horListBox');

		for (let i = 0; i < ans.length; i++) {
			const listElement = document.createElement('div');
			listElement.classList.add('horList');

			const InnerlistElement = document.createElement('div');
			InnerlistElement.classList.add('innerHorList');

			InnerlistElement.innerHTML = `
                <div className='imgBox'>
                    <img src=https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ans[i].id}_image01.jpg>
                    <p>${ans[i].name}</p>
                </div>
            `;
			InnerlistElement.addEventListener('click', function () {
				router.push(`/detail/${ans[i].id}`);
				setBotMode('off');
				document.querySelector('#AImodalOnBtn').style.display = 'block';
				document.querySelector('.logoTest').style.display = 'none';
			});

			listElement.appendChild(InnerlistElement);
			TempElement.appendChild(listElement);
		}
		AIsec2.appendChild(TempElement);

		// 개수 표현
		const TempElement2 = document.createElement('div');
		TempElement2.classList.add('msgFromAI');
		TempElement2.innerText = `${ans.length}개가 검색되었습니다.`;
		AIsec2.appendChild(TempElement2);

		// 개행
		const emptyBox = document.createElement('div');
		emptyBox.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox);
		TempElement2.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	}
	if (classification == 'exhibitionDateSearch') {
		// 목록 표현
		const TempElement = document.createElement('div');
		TempElement.classList.add('horListBox');

		for (let i = 0; i < ans.length; i++) {
			const listElement = document.createElement('div');
			listElement.classList.add('horList');

			const InnerlistElement = document.createElement('div');
			InnerlistElement.classList.add('innerHorList');

			InnerlistElement.innerHTML = `
                <div className='imgBox'>
                    <a target=_blank href=https://tickets.interpark.com/goods/${ans[i].href}> 
                            <img src=http://ticketimage.interpark.com/rz/image/play/goods/poster/22/${ans[i].href}_p_s.jpg>
                        <p>${ans[i].title}</p>
                    </a>
                </div>
                `;
			InnerlistElement.addEventListener('click', function () {
				goToDetail(ans[i].name, router);
				setBotMode('off');
				document.querySelector('#AImodalOnBtn').style.display = 'block';
				document.querySelector('.logoTest').style.display = 'none';
			});

			listElement.appendChild(InnerlistElement);
			TempElement.appendChild(listElement);
		}
		AIsec2.appendChild(TempElement);

		// 개수 표현
		const TempElement2 = document.createElement('div');
		TempElement2.classList.add('msgFromAI');
		TempElement2.innerText = `${ans.length}개가 검색되었습니다.`;
		AIsec2.appendChild(TempElement2);

		// 개행
		const emptyBox = document.createElement('div');
		emptyBox.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox);
		TempElement2.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	}

	// <AI response (3)>
	// 템플릿 값 붙여줌
	const TempElement2 = document.createElement('div');
	// 붙여줌
	if (template !== null) {
		TempElement2.classList.add('msgFromAI');
		TempElement2.innerHTML = template;
		AIsec2.appendChild(TempElement2);
		// 개행
		const emptyBox = document.createElement('div');
		emptyBox.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox);
	}

	// 마무리 (포커스 이동)
	if (scrollPoint == 1) {
		TempElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	} else if ((scrollPoint = 2)) {
		TempElement2.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	} else if ((scrollPoint = 3)) {
		// 이전 분기에서 처리함
	}

	setInputValue('');
	return false;
};

export default submitInput;
