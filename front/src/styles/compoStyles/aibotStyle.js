import styled from '@emotion/styled';

import cssUnit from 'src/lib/cssUnit';
//background-color: ${cssUnit.colors.DarkGold};
const AIBotLayout = styled.div`
	position: relative;
	z-index: 2;

	#AImodalOnBtn {
		margin-left: 10px;
		position: fixed;

		right: 30px;
		bottom: 30px;

		justify-content: center;
		width: 100px;
		height: 100px;
		background-color: ${cssUnit.colors.DarkGold};
		border-radius: 50%;
		line-height: 100px;
		text-align: center;
		font-size: ${cssUnit.fontSize.medium};
		font-weight: bold;

		z-index: 5;
		&:hover {
			cursor: pointer;
		}
	}

	@media screen and (max-width: 599px) {
		right: 5%;
		bottom: 5%;
	}

	// 로고
	.chatBotControl {
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

	.logoTest {
		position: fixed;
		right: 30px;
		bottom: 500px;
		height: 100px;
		width: 450px;
		/* border-radius: 110px 110px 110px 110px; */
		/* border: solid 1px ${cssUnit.backgroundColors.Black}; */
	}
`;

export default AIBotLayout;

/* DeepBlack: '#111111',
		Black: '#222222',
		LightBlack: '#2D2D2D', */
