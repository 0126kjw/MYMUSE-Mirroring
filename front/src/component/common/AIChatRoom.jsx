// style
import AiChatRoomStyle from 'src/styles/compoStyles/aiChatRoomStyle';
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
import FeedBackModal from 'src/component/common/FeedBackModal';

// library
import { useState, useEffect } from 'react';
import { AiFillStepForward } from 'react-icons/ai';

// image
import logoImg from '../../../public/images/siteLogo.png';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	const [feedBackModal, setFeedBackModal] = useState('off');

	let innerScreen = 0;
	let outerScreen = 0;
	const outerCheck = () => {
		if (innerScreen + outerScreen == 1) setFeedBackModal('on');
		innerScreen = 0;
		outerScreen = 0;
	};
	const innerCheck = () => {
		innerScreen = 0;
		outerScreen = 0;
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
		submitInput();
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput();
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

	const submitInput = () => {
		const AIsec2 = document.querySelector('.AIsec2');

		// 유저 질문
		const humanMsg = document.createElement('div');
		humanMsg.classList.add('msgFromHuman');
		humanMsg.innerText = inputValue;
		AIsec2.appendChild(humanMsg);

		const emptyBox = document.createElement('div');
		emptyBox.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox);

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
			const TempElement2 = document.createElement('div');
			TempElement2.classList.add('msgFromAI');
			TempElement2.innerText = `${10}개 검색됨. \n 조작 : 목록에서 shift + scroll`;
			AIsec2.appendChild(TempElement2);
			TempElement2.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		} else {
			const TempElement = document.createElement('div');
			TempElement.classList.add('msgFromAI');
			TempElement.innerText = 'AI의 뭔가 그럴싸한 답변';
			AIsec2.appendChild(TempElement);
			TempElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}
		const emptyBox2 = document.createElement('div');
		emptyBox2.classList.add('emptyBox');
		AIsec2.appendChild(emptyBox2);

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

		// horListBox
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
