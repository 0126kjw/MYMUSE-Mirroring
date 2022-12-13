import styled from '@emotion/styled';

const WatchedOnButtonStyle = styled.div`
	position: fixed;
	right: 13px;
	bottom: 50vh;
	background-color: red;
	width: 300px;
	height: 300px;
`;

const WatchedOnButton = () => {
	return (
		<WatchedOnButtonStyle
			onClick={() => {
				alert();
			}}
		>
			삼각형!!!!!!
		</WatchedOnButtonStyle>
	);
};

export default WatchedOnButton;
