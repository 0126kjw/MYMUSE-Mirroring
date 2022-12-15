// style
import AiChatRoomStyle from 'src/styles/compoStyles/aiChatRoomStyle';
import FeedBackModal from 'src/component/common/ai/FeedBackModal';
import InfoModal from 'src/component/common/ai/InfoModal';

// library
import Image from 'next/legacy/image';
import { useState, useEffect, createElement } from 'react';
import { useRouter } from 'next/router';
// image
import logoImg from '../../../../public/images/siteLogo.png';
import enterImg from '../../../../public/images/enter.png';

// util
import submitInput from 'src/component/common/ai/ai_util/submitInput';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	const [isFeedBackModalOn, setIsFeedBackModalOn] = useState(false);
	const [isInfoModalOn, setIsInfoModalOn] = useState(false);

	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const openInfoModal = () => {
		setIsInfoModalOn(true);
	};

	const closeBot = () => {
		setBotMode('off');
		document.querySelector('#AImodalOnBtn').style.display = 'block';
		document.querySelector('.logoTest').style.display = 'none';
	};
	const submitByClick = () => {
		submitInput(inputValue, setInputValue, router, setBotMode);
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput(inputValue, setInputValue, router, setBotMode);
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

	// chatRoom 창을 반영한 제어창, 입력창, 내부 목록값들 크기 조정
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
			if (selectedElements.length >= 5) {
				for (let i = 0; i < selectedElements.length; i++) {
					selectedElements[i].style.width = `${chatRoomWidth - 50}px`;
				}
			}
		}
	}, [chatRoomHeight, chatRoomWidth]);

	return (
		<>
			{isFeedBackModalOn == true && (
				<FeedBackModal setIsFeedBackModalOn={setIsFeedBackModalOn} />
			)}
			{isInfoModalOn == true && <InfoModal setIsInfoModalOn={setIsInfoModalOn} />}

			<AiChatRoomStyle>
				<div className='modalTopSection'>
					<div className='topInnerSection'>
						<div className='ControlSection'>
							<Image src={logoImg} alt='logoImg' width='100' height='30'></Image>
							<div className='buttonBundles'>
								<button className='closeButton' onClick={closeBot}>
									<span>X</span>
								</button>
							</div>
						</div>
					</div>
					<div
						className='feedBackSection'
						onClick={() => {
							setIsFeedBackModalOn(true);
						}}
					>
						<p> AI Bot 피드백 작성 </p>
					</div>
				</div>
				<div className='AImodal-Outer'>
					<div className='AImodal-Inner'>
						<div className='AIsec2'>
							<div className='msgFromAI'>
								MYMUSE에 오신 것을 환영합니다. <br></br>
								궁금한 부분을 질문해주세요!
							</div>
							<div className='emptyBox'></div>
							<div className='msgFromAI'>
								<p>다음과 같은 대화와 안내가 가능합니다!</p>
								<hr></hr>
								<p>- 간단한 인사</p>
								<p>- 진행중인 전시회 일정 안내</p>
								<p>- 구 별 박물관/미술관 안내</p>
								<p>- 특정기관 운영시간 안내</p>
								<p>- 특정기관 연락처 안내</p>
								<p>- 특정기관 입장료 안내</p>
								<p>- 특정기관 위치 안내</p>
								<p>- 기타 문의 </p>
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
					<button className='infoButton' onClick={openInfoModal}>
						<span>Info</span>
					</button>
					<form onSubmit={submitByEnter}>
						<input type='text' value={inputValue} onChange={onChangeHandler} />
					</form>
					<button className='enterButton' onClick={submitByClick}>
						<Image src={enterImg} alt='enterImage' width='50' height='50'></Image>
					</button>
				</div>
			</AiChatRoomStyle>
		</>
	);
};
export default AIChatRoom;
