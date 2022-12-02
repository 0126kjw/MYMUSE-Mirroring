import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const AIChatRoomStyle = styled.div`
	.AImodal-Outer {
		border: solid #997a4c 1px;
		text-align: center;

		transform: rotateZ(180deg);
		resize: both;
		overflow: auto;
		position: fixed;

		right: 30px;
		bottom: 100px;

		height: 450px;
		width: 450px;

		margin: 0 auto;
		background-color: #d9d9d9;
		border-radius: 20px 20px 0px 20px;
	}

	.AImodal-Inner {
		transform: rotateZ(180deg);
		width: 100%;
		height: 100%;
		overflow: auto;
		-ms-overflow-style: none;
	}

	.AImodal-Inner::-webkit-scrollbar {
		display: none;
	}

	// 로고
	.AIsec1 {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #222222;
		color: white;
		height: 50px;
		button {
			position: absolute;
			right: 10px;
			background-color: #222222;
			color: #997a4c;
			border: none;
			cursor: pointer;
		}
	}

	.AIsec2 {
		min-height: 400px;
		overflow: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		.msgFromAI {
			float: left;
			background-color: #ffffff;
			margin: 1%;
			padding: 1%;
			text-align: left;
			width: 70%;
			min-height: 20px;
			border-radius: 10px;
		}

		.msgFromHuman {
			float: right;
			background-color: #997a4c;
			background-color: #6e3a07;
			color: white;
			margin: 1%;
			padding: 1%;
			text-align: right;
			width: 70%;
			min-height: 20px;
			border-radius: 10px;
		}
	}
	.AIsec2::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	.formDiv {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 450px;
		height: 70px;
		border-radius: 20px;

		// background-color: #d9d9d9;
		background-color: #997a4c;
		background-color: #6e3a07;
		display: flex;
		justify-content: center;
		align-items: center;

		form {
			width: 70%;
			height: 80%;
			margin-top: 2%;
		}
		input {
			flex-direction: row;
			background-color: #ffffff;
			border-radius: 10px;
			border: solid 1px #d9d9d9;
			width: 90%;
			height: 70%;
		}
		button {
			margin-top: 5px;
			margin-left: 5px;
			margin-right: 5px;
			width: 10%;
			height: 70%;
			border-radius: 10px;
			border: solid 1px #997a4c;
			background-color: black;
			color: white;
			font-size: 20px;
			cursor: pointer;
		}
	}
`;

const AIChatRoom = ({ setBotMode }) => {
	const [inputValue, setInputValue] = useState('');

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

	const submitInput = () => {
		const ele = document.querySelector('.AIsec2');
		const humanMsg = document.createElement('div');
		humanMsg.classList.add('msgFromHuman');
		humanMsg.innerText = inputValue;
		ele.appendChild(humanMsg);
		const AiMsg = document.createElement('div');
		AiMsg.classList.add('msgFromAI');
		AiMsg.innerText = 'AI의 뭔가 그럴싸한 답변';
		ele.appendChild(AiMsg);

		// const AIsec3 = document.querySelector('.AIsec3');
		AiMsg.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		setInputValue('');
		return false;
	};

	return (
		<AIChatRoomStyle>
			<div className='AImodal-Outer'>
				<div className='AImodal-Inner'>
					<div className='AIsec1'>MYMUSE</div>
					<div className='AIsec2'>
						<div className='msgFromAI'>반갑다 인간, 어떤 도움이 필요한가?</div>
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
				<button onClick={closeBot}>x</button>
			</div>
		</AIChatRoomStyle>
	);
};
export default AIChatRoom;

// 하얀색 배경 D9D9D9
// 블랙 22222
// 골드 997A4C border, X 푯히
