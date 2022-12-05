import AiChatRoomStyle from 'src/styles/compoStyles/aiChatRoomStyle';
import { useState, useEffect } from 'react';
import { AiFillStepForward } from 'react-icons/ai';
import styled from '@emotion/styled';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	let done = 'x';

	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};
	const closeBot = () => {
		setBotMode('off');
	};
	const submitByClick = () => {
		submitInput();
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput();
	};

	// AIBot 움직임
	const observer = new ResizeObserver((entries) => {
		for (let entry of entries) {
			const { width, height } = entry.contentRect;
			setChatRoomWidth(width);
			setChatRoomHeight(height);
		}
	});

	const submitInput = () => {
		const AIsec2 = document.querySelector('.AIsec2');

		// 유저 질문
		const humanMsg = document.createElement('div');
		humanMsg.classList.add('msgFromHuman');
		humanMsg.innerText = inputValue;
		AIsec2.appendChild(humanMsg);

		// AI 답변

		if (inputValue === '목록') {
			//
			const TempElement = document.createElement('div');
			TempElement.classList.add('horListBox');
			TempElement.style.width = `${chatRoomWidth - 100}px`;

			for (let i = 0; i < 10; i++) {
				const listElement = document.createElement('div');
				listElement.innerHTML = 'listElement';
				listElement.classList.add('horList');
				TempElement.appendChild(listElement);
			}
			AIsec2.appendChild(TempElement);
			//
			const TempElement2 = document.createElement('div');
			TempElement2.classList.add('msgFromAI');
			TempElement2.innerText = `${10}개 검색됨. (목록에서 shift + scroll)`;
			AIsec2.appendChild(TempElement2);
			TempElement2.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		} else {
			const TempElement = document.createElement('div');
			TempElement.classList.add('msgFromAI');
			TempElement.innerText = 'AI의 뭔가 그럴싸한 답변';
			AIsec2.appendChild(TempElement);
			TempElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}

		setInputValue('');
		return false;
	};

	// 봇 활성화시 AIBot 상단에 제어창 생성
	useEffect(() => {
		if (botMode == 'on' && done == 'x') {
			// done : flag
			const Parent = document.querySelector('.logoTest');
			const POS = document.querySelector('.position');

			const botController = document.createElement('div');
			const botOffButton = document.createElement('button');

			botController.innerText = 'MYMUSE';
			botOffButton.innerText = 'x';
			botOffButton.onclick = function () {
				closeBot();
			};

			botController.classList.add('chatBotControl');
			botController.id = 'chatBotControl';
			botController.appendChild(botOffButton);
			Parent.insertBefore(botController, POS);
			done = 'o';

			const targetEle = document.querySelector('.AImodal-Outer');
			observer.observe(targetEle);
		}
	}, [botMode]);

	// chatRoom 창을 반영한 제어창 위치조정
	useEffect(() => {
		const chatBotControl = document.querySelector('.logoTest');
		chatBotControl.style.bottom = `${chatRoomHeight + 50}px`;
		chatBotControl.style.width = `${chatRoomWidth}px`;

		console.log(document.querySelector('.horListBox'));

		if (document.querySelector('.horListBox') !== null) {
			const selectedElements = document.querySelectorAll('.horListBox');
			for (let i = 0; i < selectedElements.length; i++) {
				selectedElements[i].style.width = `${chatRoomWidth - 50}px`;
			}
		}
	}, [chatRoomHeight, chatRoomWidth]);

	return (
		<AiChatRoomStyle>
			<div className='AImodal-Outer'>
				<div className='AImodal-Inner'>
					<div className='AIsec2'>
						<div className='msgFromAI'>
							MYMUSE에 오신 것을 환영합니다. 궁금한 부분은 저에게 질문해주세요!
						</div>
						<div className='msgFromHuman'>나를 국중박으로 안내해라</div>
						<div className='msgFromAI'>국중박이 무엇인지?</div>
						<div className='msgFromHuman'>국립중앙박물관 멍청아</div>
						<div className='msgFromAI'>너희 엄마한테 물어봐라 멍청아</div>
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
	);
};
export default AIChatRoom;

// 하얀색 배경 D9D9D9
// 블랙 22222
// 골드 997A4C border, X 푯히
