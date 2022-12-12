// style
import AiChatRoomStyle from 'src/styles/compoStyles/aiChatRoomStyle';

import FeedBackModal from 'src/component/common/ai/FeedBackModal';

// library
import Image from 'next/legacy/image';
import { useState, useEffect, createElement } from 'react';
import { useRouter } from 'next/router';
// image
import logoImg from '../../../../public/images/siteLogo.png';

// util
import submitInput from 'src/component/common/ai/ai_util/submitInput';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	const [feedBackModal, setFeedBackModal] = useState('off');

	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const closeBot = () => {
		setBotMode('off');
		document.querySelector('#AImodalOnBtn').style.display = 'block';
		document.querySelector('.logoTest').style.display = 'none';
	};
	const submitByClick = () => {
		submitInput(inputValue, setInputValue, chatRoomWidth, chatRoomHeight, router);
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput(inputValue, setInputValue, chatRoomWidth, chatRoomHeight, router);
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
							<div className='msgFromAI'>
								(팁) 화면 좌상단에서 채팅봇 크기 조정이 가능합니다
							</div>

							<div className='emptyBox'></div>
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
