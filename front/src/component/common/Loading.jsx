import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
import AutoTyper from '../main/AutoTyper';

const LoadingLayout = styled.div`
	//margin-top: 250px;
	color: ${cssUnit.colors.DeepBlack};
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
		font-size: 32px;
	}
	//반응형
	@media screen and (max-width: 900px) {
		width: 100%;
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

	.spinner {
		box-sizing: border-box;
		/* position: absolute;
		top: 50%;
		left: 50%; */
		width: 64px;
		height: 64px;
		//margin-top: -32px;
		//margin-left: -32px;
		border-radius: 50%;
		border: 8px solid transparent;
		border-top-color: ${cssUnit.colors.DarkGold};
		border-bottom-color: ${cssUnit.colors.DarkGold};
		animation: spinner 0.8s ease infinite;

		@keyframes spinner {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
	}

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
		border: 1px solid ${cssUnit.colors.DarkGold};
		width: calc(100% + 40px);
		height: calc(100% + 40px);
		border-radius: 50%;
		animation: pulse 1s linear infinite;
	}

	.pulse::after {
		content: '';
		position: absolute;
		border: 1px solid ${cssUnit.colors.DarkGold};
		width: calc(100% + 40px);
		height: calc(100% + 40px);
		border-radius: 50%;
		animation: pulse 1s linear infinite;
		animation-delay: 0.3s;
	}
	@keyframes pulse {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}

		50% {
			transform: scale(1);
			opacity: 1;
		}

		100% {
			transform: scale(1.3);
			opacity: 0;
		}
	}

	//반응형
	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;
const Loading = () => {
	return (
		<>
			<LoadingLayout>
				<SpinnerLayout>
					<div className='pulse'>
						<div className='spinner' />
					</div>
				</SpinnerLayout>
			</LoadingLayout>
		</>
	);
};

export default Loading;
