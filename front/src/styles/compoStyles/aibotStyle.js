import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

const AIBotLayout = styled.div`
	position: relative;
	z-index: 2;
	.logoTest {
		display: none;
	}

	#AImodalOnBtn {
		display: block;
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
`;

export default AIBotLayout;
