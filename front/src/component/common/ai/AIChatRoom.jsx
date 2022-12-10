// style
import AiChatRoomStyle from 'src/styles/compoStyles/aiChatRoomStyle';
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
import FeedBackModal from 'src/component/common/ai/FeedBackModal';

// template
import facilityOpeningHoursTemp from 'src/component/common/ai/facilityOpeningHoursTemp';

// library
import { useState, useEffect, createElement } from 'react';
import { AiFillStepForward } from 'react-icons/ai';

// image
import logoImg from '../../../../public/images/siteLogo.png';

// util
import chat_question from 'src/component/common/ai/chat_question';
import chat_Answer from 'src/component/common/ai/chat_Answer';

import { IdBook } from 'src/data/idBook';

import axios from 'axios';
import { useRouter } from 'next/router';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	const [feedBackModal, setFeedBackModal] = useState('off');
	const router = useRouter();

	const goToDetail = (name) => {
		IdBook.forEach((e) => {
			const Name = e.name;
			if (Name == name) {
				router.push(`/detail/${e.id}`);
				return;
			}
		});
	};

	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const closeBot = () => {
		setBotMode('off');
		document.querySelector('#AImodalOnBtn').style.display = 'block';
		document.querySelector('.logoTest').style.display = 'none';
	};
	const submitByClick = () => {
		submitInput(inputValue);
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput(inputValue);
	};

	useEffect(() => {
		// AIBot 움직임
		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				const { width, height } = entry.contentRect;
				setChatRoomWidth(width);
				setChatRoomHeight(height);
			}
		});

		if (botMode == 'on') {
			const targetEle = document.querySelector('.AImodal-Outer');
			observer.observe(targetEle);
		}
	}, [botMode]);

	const submitInput = async (inputValue) => {
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

		// API 리턴값 축약
		const fulfillmentText = data.fulfillmentText;
		const classification = data.displayName;
		const ans = data.intendedAnswer;

		// 답변 저장용 변수
		let infoGuide = null;
		let template = null;

		// 답변 분류
		if (classification == 'DefaultFallback') {
			// 알 수 없는 질문
			infoGuide = fulfillmentText;
		} else if (classification == 'facilityAreaSearch') {
			// 종로구에 미술관 있어?
			infoGuide = fulfillmentText;
		} else if (classification == 'facilityContact') {
			// '쉼박물관 연락처 좀 줘'
			infoGuide = fulfillmentText;
			template = `${ans.contactInfo}`;
		} else if (classification == 'facilityAddress') {
			// '경운박물관 어디에 있어'
			infoGuide = fulfillmentText;
			template = `도로명 주소 : ${ans.newAddress}, 지번 주소 : ${ans.oldAddress}`;
		} else if (classification == 'facilityOpeningHours') {
			// '경운박물관 언제 문 닫아'
			infoGuide = fulfillmentText;
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
			infoGuide = fulfillmentText;
			if (ans.isFree == true) {
				template = `확인결과 ${ans.name}(은/는) 무료입장이 가능합니다.`;
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
					goToDetail(ans[i].name);
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

	// chatRoom 창을 반영한 제어창 위치 조정
	useEffect(() => {
		// modalTopSection
		const modalTopSection = document.querySelector('.modalTopSection');
		modalTopSection.style.bottom = `${chatRoomHeight + 95}px`;
		modalTopSection.style.width = `${chatRoomWidth}px`;

		// formDiv
		const formDiv = document.querySelector('.formDiv');
		formDiv.style.width = `${chatRoomWidth}px`;

		// horListBox;
		if (document.querySelector('.horListBox') !== null) {
			const selectedElements = document.querySelectorAll('.horListBox');
			for (let i = 0; i < selectedElements.length; i++) {
				selectedElements[i].style.width = `${chatRoomWidth - 50}px`;
			}
		}
	}, [chatRoomHeight, chatRoomWidth]);

	return (
		<>
			{feedBackModal == 'on' && <FeedBackModal setFeedBackModal={setFeedBackModal} />}
			<AiChatRoomStyle>
				<div className='modalTopSection'>
					<Image src={logoImg} alt='logoImg' width='100' height='30'></Image>
					<button onClick={closeBot}>X</button>
				</div>
				<div className='AImodal-Outer'>
					<div className='AImodal-Inner'>
						<div className='AIsec2'>
							<div
								className='feedBack'
								onClick={() => {
									setFeedBackModal('on');
								}}
							>
								<p> ⮞⮞⮞ AI Bot 피드백 작성 ⮞⮞⮞ </p>
							</div>
							<div className='msgFromAI'>
								MYMUSE에 오신 것을 환영합니다. 궁금한 부분은 저에게 질문해주세요!
							</div>
							<div className='emptyBox'></div>
							{/* <div className='msgFromHuman'>국립중앙박물관이 어디에 있나요?</div>
							<div className='emptyBox'></div> */}
						</div>
					</div>
				</div>

				<div className='formDiv'>
					<form onSubmit={submitByEnter}>
						<input type='text' value={inputValue} onChange={onChangeHandler} />
					</form>
					<button onClick={submitByClick}>&gt;</button>
				</div>
			</AiChatRoomStyle>
		</>
	);
};
export default AIChatRoom;
