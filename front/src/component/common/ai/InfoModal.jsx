import styled from '@emotion/styled';
import OuterModal from 'src/styles/compoStyles/OuterModalStyle';
import { useState, useEffect } from 'react';

const InfoModalLayout = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	flex-direction: column;

	width: 600px;
	height: 620px;
	background: #fff;
	border-radius: 4px;
	z-index: 10;

	margin: 0 auto;
	padding: 10px;

	.titleSection {
		width: 100%;
		height: 30px;
		text-align: center;
		h3 {
			margin-top: 10px;
			margin-bottom: 30px;
		}
		hr {
			margin-top: 15px;
			margin-bottom: 30px;
		}
	}

	.chatExample {
		padding-top: 35px;
		line-height: 15px;
		padding-left: 20px;
		font-weight: bold;
		.question {
			color: black;
		}
		.example {
			padding-left: 60px;
			color: brown;
		}
	}
`;
// setBotInfoModal
const InfoModal = ({ setBotInfoModal }) => {
	useEffect(() => {
		document.addEventListener('keydown', (event) => {
			if (event.key == 'Escape') {
				setBotInfoModal('off');
			}
		});
	}, []);

	let innerClick = 0;
	let outerClick = 0;
	const outerCheck = () => {
		if (innerClick + outerClick == 1) setBotInfoModal('off');
		innerClick = 0;
		outerClick = 0;
	};

	return (
		<>
			<OuterModal
				onClick={() => {
					outerClick++;
					outerCheck();
				}}
			></OuterModal>
			<InfoModalLayout
				onClick={() => {
					innerClick++;
				}}
			>
				<div className='titleSection'>
					<h3>다음과 같은 질문 답변이 가능합니다</h3>
					<hr></hr>
				</div>
				<div className='chatExample'>
					<p className='question'>- 간단한 인사</p>
					<p className='example'>EX) 안녕하세요</p>
					<p className='question'>- 진행중인 전시회 일정 안내</p>
					<p className='example'>'EX) 다음주에 열리는 전시회 알려줘'</p>
					<p className='question'>- 구 별 박물관/미술관 안내</p>
					<p className='example'>'EX) 종로구에 어떤 미술관 있어?'</p>
					<p className='question'>- 특정기관 운영시간 안내</p>
					<p className='example'>'EX) 국립중앙박물관 쉬는날이 언제야?'</p>
					<p className='question'>- 특정기관 연락처 안내</p>
					<p className='example'>'EX) 국립중앙박물관 전화번호가 뭐야?'</p>
					<p className='question'>- 특정기관 입장료 안내</p>
					<p className='example'>'EX) 국립중앙박물관 입장료가 얼마야?'</p>
					<p className='question'>- 특정기관 위치 안내</p>
					<p className='example'>'EX) 국립중앙박물관 어디에 있어?'</p>
					<p className='question'>- 특정기관 기타 문의사항 (알고싶은 정보) </p>
					<p className='example'>'EX) 국립중앙박물관에 장애인 전용 주차장 있어?'</p>
				</div>
			</InfoModalLayout>
		</>
	);
};

export default InfoModal;
