import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
import AutoTyper from '../main/AutoTyper';

const LoadingLayout = styled.div`
	//margin-top: 250px;
	color: ${cssUnit.colors.Black};
	font-family: ${cssUnit.fontFamily.NotoKR_G};
	font-size: 25px;
	/* width: 100vw;
	height: 100vh;
	background-color: aqua; */

	//position: relative;
	background-color: ${cssUnit.colors.White};
	margin: 0px auto;
	//margin-top: 120px;
	padding: 0px;
	width: 800px;
	height: 500px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		margin: 50px 0 0px 0;
		font-size: 28px;

		padding-bottom: 10px;
		border-bottom: 2px solid ${cssUnit.colors.DarkGold};

		.keyword {
			color: ${cssUnit.colors.DarkGold};
		}
	}
	h4 {
		font-family: ${cssUnit.fontFamily.NanumM};
		color: ${cssUnit.colors.DarkGray};
		margin-top: 15px;
	}
`;

const SpinnerLayout = styled.div`
	//display: none;
	width: 100%;
	height: 80%;
	//position: absolute;
	//top: 0;
	//left: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.pulse {
		height: 100px;
		width: 100px;
		background-color: ${cssUnit.colors.White};
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.pulse::before {
		content: '';
		position: absolute;
		border: 1px solid ${cssUnit.colors.LightBlack};
		width: calc(100% + 40px);
		height: calc(100% + 40px);
		border-radius: 50%;
		animation: pulse 1s linear infinite;
		animation-delay: 0.3s;
	}

	.pulse::after {
		content: '';
		position: absolute;
		border: 1px solid ${cssUnit.colors.LightBlack};
		width: calc(100% + 40px);
		height: calc(100% + 40px);
		border-radius: 50%;
		animation: pulse 1s linear infinite;
	}
	@keyframes pulse {
		0% {
			transform: scale(1.3);
			opacity: 0;
		}

		50% {
			transform: scale(1);
			opacity: 1;
		}

		100% {
			transform: scale(0.5);
			opacity: 0;
		}
	}
`;
const NotFoundResult = () => {
	return (
		<>
			<LoadingLayout>
				{/* <AutoTyper sentence={`데이터를 가져오는 중입니다...`} color={'black'} /> */}
				<h1>
					{/* <span className='keyword'>{searchKeyword} </span>에 대한 */}
					검색 결과가 존재하지 않습니다.
				</h1>
				<h4>다른 키워드로 검색해주세요</h4>
				<SpinnerLayout>
					<div className='pulse'></div>
				</SpinnerLayout>
			</LoadingLayout>
		</>
	);
};

export default NotFoundResult;
