import styled from '@emotion/styled';
import leftArrow from '../../../public/images/left-arrow.png';
import Image from 'next/legacy/image';
import cssUnit from 'src/lib/cssUnit';
const WatchedOnButtonStyle = styled.div`
	padding: 0px;
	margin: 0px;
	position: fixed;
	right: 10px;
	top: 50vh;
	z-index: 2;
	background-color: ${cssUnit.colors.DarkGold};
	width: 35px;
	height: 35px;
	border-radius: 50%;
	//border: solid 1px black;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);

		transform: scale(1);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(229, 211, 184, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 30px rgba(229, 211, 184, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(229, 211, 184, 0);
		}
	}

	//overflow-x: hidden;
`;

const WatchedOnButton = ({ setIsWatchedOn }) => {
	return (
		<WatchedOnButtonStyle
			onClick={() => {
				setIsWatchedOn(true);
			}}
		>
			<Image src={leftArrow} alt='openWatched' width='25' height='25' />
		</WatchedOnButtonStyle>
	);
};

export default WatchedOnButton;
