import styled from '@emotion/styled';
import OuterModal from 'src/styles/compoStyles/OuterModalStyle';
import { useState, useEffect } from 'react';
import enterImg from '../../../../public/images/enter.png';
import Image from 'next/legacy/image';
//import axios from 'axios';

//api from src/util/api.js
import { PostFeedback } from 'src/utils/api';

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

	.titleSection {
		width: 100%;
		height: 100px;
		text-align: center;
		line-height: 20px;
	}
	.feedbackSection {
		width: 100%;
		height: 300px;
		text-align: center;
		textarea {
			width: 500px;
			height: 200px;
			margin-bottom: 10px;
			border: solid 1px black;
			font-weight: bold;
			font-size: 25px;
			resize: none;
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
					<h3>AI챗봇 서비스 품질 향상을 위해 </h3>
					<h3>고객님의 만족도를 간략히 남겨주세요! </h3>
				</div>
				<div className='feedbackSection'>
					<form>
						<textarea value={inputValue} onChange={onChange} />
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
