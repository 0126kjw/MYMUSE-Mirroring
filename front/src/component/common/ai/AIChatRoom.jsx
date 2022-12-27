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
import elemSizeHandler from './ai_util/elemSizeHandler';
import cssUnit from 'src/lib/cssUnit';

// template component
import Template_basic from './ai_util/templates/Template_basic';

const AIChatRoom = ({ setBotMode, botMode }) => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState('');
	const [chatRoomWidth, setChatRoomWidth] = useState(450);
	const [chatRoomHeight, setChatRoomHeight] = useState(450);
	const [isFeedBackModalOn, setIsFeedBackModalOn] = useState(false);
	const [isInfoModalOn, setIsInfoModalOn] = useState(false);
	const [chatElems, setChatElems] = useState([Template_basic()]);

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
		submitInput(
			inputValue,
			setInputValue,
			router,
			setBotMode,
			chatElems,
			setChatElems,
			chatRoomWidth,
		);
	};

	const submitByEnter = (e) => {
		e.preventDefault();
		submitInput(
			inputValue,
			setInputValue,
			router,
			setBotMode,
			chatElems,
			setChatElems,
			chatRoomWidth,
		);
	};

	useEffect(() => {
		// AIBot 움직임 측정
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

	useEffect(() => {
		elemSizeHandler(chatRoomHeight, chatRoomWidth);
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
						<p> AI 피드백 작성하기 </p>
					</div>
				</div>
				<div className='AImodal-Outer'>
					<div className='AImodal-Inner'>
						<div className='AIsec2'>
							{/* 질답 chatElems 배열 출력*/}
							{chatElems.map((item, idx) => (
								<div key={idx}>{item}</div>
							))}
						</div>
					</div>
				</div>
				<div className='formDiv'>
					<button className='infoButton' onClick={openInfoModal}>
						<span>?</span>
					</button>
					<form onSubmit={submitByEnter}>
						<input
							type='text'
							value={inputValue}
							onChange={onChangeHandler}
							style={{
								outline: 'none',
								fontFamily: `${cssUnit.fontFamily.PreTended}`,
								fontSize: '18px',
							}}
						/>
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
