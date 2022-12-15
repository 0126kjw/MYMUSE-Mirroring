import styled from '@emotion/styled';
import OuterModal from 'src/styles/compoStyles/OuterModalStyle';
import { useState, useEffect } from 'react';
import enterImg from '../../../../public/images/enter.png';
import Image from 'next/legacy/image';

//import axios from 'axios';
import Xmark from '../Xmark';
//api from src/util/api.js
import { PostFeedback } from 'src/utils/api';
import cssUnit from 'src/lib/cssUnit';

const FeedBackModalLayout = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	flex-direction: column;

	width: 600px;
	height: 400px;
	background: #fff;
	border-radius: 4px;
	z-index: 10;

	margin: 0 auto;
	padding: 0px;

	@media screen and (max-width: 650px) {
		width: 90%;
	}

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.titleSection {
		width: 40%;
		height: 100px;
		text-align: center;
		//line-height: 100px;

		word-break: keep-all;

		display: -webkit-box;
		-webkit-box-orient: vertical;

		justify-content: center;
		align-items: center;

		font-family: ${cssUnit.fontFamily.GowunBT};
		font-weight: bold;

		.gold {
			color: ${cssUnit.colors.DarkGold};
		}
		.ui {
			position: absolute;
			margin-left: auto;
			width: 20px;
			height: 20px;
			text-align: center;
			top: -4px;
			right: 10px;

			//bottom: 30px;
		}

		@media screen and (max-width: 650px) {
			width: 90%;
			font-size: 15px;
			margin: 5px;
			//line-height: 100px;

			justify-content: center;
			align-items: center;
		}
	}
	.feedbackSection {
		width: 100%;
		height: 300px;
		text-align: center;

		textarea {
			width: 400px;
			height: 140px;
			margin-bottom: 10px;
			border: solid 1px ${cssUnit.colors.Gray};
			font-weight: bold;
			font-size: 25px;
			resize: none;

			padding: 30px;
			@media screen and (max-width: 650px) {
				width: 90%;
				font-size: 20px;
			}
		}
	}
	button {
		margin-top: -10px;
		background-color: white;
		border: 1px solid white;
		cursor: pointer;
	}
`;

const FeedBackModal = ({ setIsFeedBackModalOn }) => {
	const [inputValue, setInputValue] = useState('');
	useEffect(() => {
		document.addEventListener('keydown', (event) => {
			if (event.key == 'Escape') {
				setIsFeedBackModalOn(false);
			}
		});
	}, []);

	let innerClick = 0;
	let outerClick = 0;
	const outerCheck = () => {
		if (innerClick + outerClick == 1) {
			setIsFeedBackModalOn(false);
		}
		innerClick = 0;
		outerClick = 0;
	};

	const onClick = () => {
		feedbackSubmit();
	};
	const onChange = (e) => {
		setInputValue(e.target.value);
	};
	const feedbackSubmit = async () => {
		if (inputValue == '') {
			alert('피드백을 입력해 주세요');
			return;
		}
		const obj = { feedback: inputValue };
		try {
			// const res = await axios.post('http://localhost:3001/chatbots/feedback', obj);
			const res = await PostFeedback(obj);
			//console.log('res', res);
			alert('감사합니다');
		} catch {
			console.log('피드백 전달 실패');
		}
		setIsFeedBackModalOn(false);
	};

	return (
		<>
			<OuterModal
				onClick={() => {
					outerClick++;
					outerCheck();
				}}
			></OuterModal>
			<FeedBackModalLayout
				onClick={() => {
					innerClick++;
				}}
			>
				<div className='titleSection'>
					<div className='ui'>
						<Xmark setIsInfoModalOn={setIsFeedBackModalOn} />
					</div>
					AI챗봇 서비스 품질 향상을 위해 <span className='gold'>고객님의 만족도</span>를
					간략히 남겨주세요!
				</div>
				<div className='feedbackSection'>
					<form>
						<textarea
							value={inputValue}
							onChange={onChange}
							style={{
								outline: 'none',
								fontFamily: `${cssUnit.fontFamily.GothicAi}`,
								fontSize: '18px',
							}}
						/>
					</form>
					<button onClick={onClick}>
						<Image src={enterImg} alt='enterImage' width='50' height='50'></Image>
					</button>
				</div>
			</FeedBackModalLayout>
		</>
	);
};

export default FeedBackModal;
