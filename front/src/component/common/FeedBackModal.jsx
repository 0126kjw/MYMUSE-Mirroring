import styled from '@emotion/styled';
import OuterModal from 'src/styles/compoStyles/OuterModalStyle';
import { useState, useEffect } from 'react';

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
			height: 220px;
			margin-bottom: 10px;
			border: solid 1px black;
			font-weight: bold;
			font-size: 25px;
		}
	}
`;

const FeedBackModal = ({ setFeedBackModal }) => {
	const [inputValue, setInputValue] = useState('');
	useEffect(() => {
		document.addEventListener('keydown', (event) => {
			if (event.key == 'Escape') {
				setFeedBackModal('none');
			}
		});
	}, []);

	let innerClick = 0;
	let outerClick = 0;
	const outerCheck = () => {
		if (innerClick + outerClick == 1) setFeedBackModal('none');
		innerClick = 0;
		outerClick = 0;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		feedbackSubmit();
	};
	const onClick = () => {
		feedbackSubmit();
	};
	const onChange = (e) => {
		setInputValue(e.target.value);
	};
	const feedbackSubmit = async () => {
		alert('감사합니다');
		setInputValue('');
		setFeedBackModal('off');
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
					<h3>AI Bot 서비스 품질 향상을 위해 </h3>
					<h3>고객님의 만족도를 남겨주세요! </h3>
				</div>
				<div className='feedbackSection'>
					<form onSubmit={onSubmit}>
						<textarea value={inputValue} onChange={onChange} />
					</form>
					<button onClick={onClick}>보내기</button>
				</div>
			</FeedBackModalLayout>
		</>
	);
};

export default FeedBackModal;
