// library
import { IdBook } from 'src/data/idBook';

import { PostUserQuestion } from 'src/utils/api';

// 유저 질문 템플릿
import Temp_UserMsg from './templates/Temp_UserMsg';

// 챗봇 답변 탬플릿
import Temp_singleMuseum from './templates/Temp_singleMuseum';
import Temp_Addr from 'src/component/common/ai/ai_util/templates/Temp_Addr';
import Temp_Hello from 'src/component/common/ai/ai_util/templates/Temp_Hello';
import Temp_Contact from 'src/component/common/ai/ai_util/templates/Temp_Contact';
import Temp_Open from 'src/component/common/ai/ai_util/templates/Temp_Open';
import Temp_Fee from 'src/component/common/ai/ai_util/templates/Temp_Fee';
import Temp_Others from 'src/component/common/ai/ai_util/templates/Temp_Others';
import Temp_Area from 'src/component/common/ai/ai_util/templates/Temp_Area';
import Temp_Exhi from 'src/component/common/ai/ai_util/templates/Temp_Exhi';
import axios from 'axios';

// util
import moveScrollPoint from './moveScrollPoint';

const submitInput = async (
	inputValue,
	setInputValue,
	router,
	setBotMode,
	chatElems,
	setChatElems,
	chatRoomWidth,
) => {
	// 1. 빈 값은 바로 리턴
	if (inputValue == '') {
		alert('값을 입력해 주세요!');
		return;
	}

	// 2. 유저 질문
	const userQuestion = Temp_UserMsg(inputValue);

	// 3. 챗봇 답변
	// 3-1 특정 박물관 입력
	let checkId = '';

	// 3-1.1 : id 값 확인
	for (const ele of IdBook) {
		if (ele.name == inputValue) {
			checkId = ele.id;
			break;
		}
	}
	// 3-1.2 : id 값에 해당하는 박물관 정보 띄우기
	if (checkId !== '') {
		const tempEle = Temp_singleMuseum(checkId, inputValue, router, setBotMode);
		setChatElems(chatElems.concat([userQuestion, tempEle]));
		setTimeout(function () {
			moveScrollPoint();
		}, 300);
		return;
	}

	// 3-2 : 그 외 모든 질문 처리
	let data = null;
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_BASE_URL}/chatbots?text=${inputValue}`,
		);
		data = res.data;
	} catch {
		console.log('posting error');
	}

	// 3-2.1 변수 설정
	// ... API 리턴값 축약
	const guide = data.fulfillmentText;
	const classification = data.displayName;
	const ans = data.intendedAnswer;
	// ... 답변 저장용 템플릿
	let AIanswer = null;

	// 3-2.2 분류한 질문에 대한 답변 템플릿 생성
	switch (classification) {
		case 'DefaultFallback':
			AIanswer = <div>{guide}</div>;
			break;
		case 'defaultWelcome':
			AIanswer = Temp_Hello(guide);
			break;
		case 'facilityContact':
			AIanswer = Temp_Contact(guide, ans.contactInfo);
			break;
		case 'facilityAddress':
			AIanswer = Temp_Addr(guide, ans.name, ans.newAddress, ans.oldAddress);
			break;
		case 'facilityOpeningHours':
			AIanswer = Temp_Open(
				guide,
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
			break;
		case 'facilityTicket':
			AIanswer = Temp_Fee(
				guide,
				ans.isFree,
				ans.name,
				ans.adultFee,
				ans.youthFee,
				ans.childFee,
				ans.feeUrl,
			);
			break;
		case 'facilityOthers':
			AIanswer = Temp_Others(ans.name, ans.website);
			break;
		case 'facilityAreaSearch':
			AIanswer = Temp_Area(guide, ans, router, setBotMode, chatRoomWidth);
			break;
		case 'exhibitionDateSearch':
			AIanswer = Temp_Exhi(guide, ans, chatRoomWidth);
			break;
		default:
			alert('분류할 수 없는 질문입니다.');
			console.log('분류할 수 없는 질문입니다.');
	}
	// 3-2.3 유저 질문과 AI 답변 묶어서 띄우기
	setChatElems(chatElems.concat([userQuestion, AIanswer]));

	// 3.2.4 마무리
	// ... 인풋창 비우기
	setInputValue('');
	// ... 마지막 지점으로 스크롤 이동
	setTimeout(function () {
		moveScrollPoint();
	}, 300);
	return false;
};

export default submitInput;
