// library
import chat_question from 'src/component/common/ai/ai_util/chat_question';
import goToDetail from 'src/component/common/ai/ai_util/goToDetail';
import axios from 'axios';

// template
import facilityOpeningHoursTemp from 'src/component/common/ai/ai_util/facilityOpeningHoursTemp';
import facilityAddressTemp from 'src/component/common/ai/ai_util/facilityAddressTemp';

const submitInput = async (inputValue, setInputValue, chatRoomWidth, chatRoomHeight, router) => {
	const AIsec2 = document.querySelector('.AIsec2');

	// 유저 질문 띄우기
	chat_question(AIsec2, inputValue);

	// 개행 (float 때문에 필요)
	const emptyBox = document.createElement('div');
	emptyBox.classList.add('emptyBox');
	AIsec2.appendChild(emptyBox);

	// API : 유저 질문 보내고 그에 대한 response 받기
	const userQuestion = { text: inputValue };
	let data = null;
	try {
		const post = await axios.post('http://localhost:3001/chatbots', userQuestion);
		data = post.data;
		console.log('data', data);
	} catch {
		console.log('posting error');
	}

	if (data.fulfillmentText == '데이터에 없는 정보 입니다.') {
		const TempElement = document.createElement('div');
		TempElement.classList.add('msgFromAI');
		TempElement.innerText = '데이터베이스를 검색했으나 질문에 대한 답을 찾지 못했습니다.';
		AIsec2.appendChild(TempElement);
		// 개행
		const emptyBox2 = document.createElement('div');
		emptyBox2.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox2);

		TempElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		setInputValue('');
		return;
	}

	// API 리턴값 축약
	const defaultGuidance = data.fulfillmentText;
	const classification = data.displayName;
	const ans = data.intendedAnswer;

	// 답변 저장용 변수
	let infoGuide = null;
	let template = null;

	// 답변 분류
	if (classification == 'DefaultFallback') {
		// 알 수 없는 질문
		infoGuide = defaultGuidance;
	} else if (classification == 'facilityAreaSearch') {
		// 종로구에 미술관 있어?
		infoGuide = defaultGuidance;
	} else if (classification == 'facilityContact') {
		// '쉼박물관 연락처 좀 줘'
		infoGuide = defaultGuidance;
		template = `${ans.contactInfo}`;
	} else if (classification == 'facilityAddress') {
		// '경운박물관 어디에 있어'
		infoGuide = defaultGuidance;
		template = facilityAddressTemp(ans.name, ans.newAddress, ans.oldAddress);
	} else if (classification == 'facilityOpeningHours') {
		// '경운박물관 언제 문 닫아'
		infoGuide = defaultGuidance;
		template = facilityOpeningHoursTemp(
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
	} else if (classification == 'facilityTicket') {
		// '경운박물관 입장료 얼마야'
		infoGuide = defaultGuidance;
		if (ans.isFree == true) {
			template = `${ans.name}(은/는) 무료입장이 가능합니다.`;
		} else {
			template = `${ans.name} 입장료는 성인 ${ans.adultFee}, 청소년 ${ans.youthFee}, 아동 ${ans.childFee} 입니다.`;
		}
	} else if (classification == 'facilityOthers') {
		infoGuide = `${ans.name}에 대해 자세히 알아볼 수 있는 페이지를 보여드릴게요!`;
		template = `<a href='${ans.website}'>${ans.name} : ${ans.website}</a>`;
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
		TempElement.style.width = `${chatRoomWidth - 100}px`;

		for (let i = 0; i < ans.length; i++) {
			const listElement = document.createElement('div');
			listElement.innerHTML = `<div>${ans[i].name}</div>`;
			listElement.addEventListener('click', function () {
				goToDetail(ans[i].name, router);
			});
			listElement.classList.add('horList');
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
	}

	// <AI response (3)>
	// 템플릿 값이 있으면 붙여주고 없으면 마무리한다.
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
	// 마무리 (포커스 무빙)
	if (template !== null) {
		TempElement2.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	} else {
		TempElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	}
	setInputValue('');
	return false;
};

export default submitInput;
