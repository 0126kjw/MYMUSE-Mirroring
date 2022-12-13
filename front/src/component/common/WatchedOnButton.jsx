import styled from '@emotion/styled';
import leftArrow from '../../../public/images/left-arrow.png';
import Image from 'next/legacy/image';

const WatchedOnButtonStyle = styled.div`
	padding: 0px;
	margin: 0px;
	position: fixed;
	right: 10px;
	top: 50vh;
	z-index: 2;
	background-color: beige;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: solid 1px black;
	cursor: pointer;
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
