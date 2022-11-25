import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

export const HeaderContainer = styled.header`
	position: relative;
	background-color: ${cssUnit.backgroundColors.Black};
	border: solid 1px;
	width: 100%;
	height: 250px;

	.logoImg {
		position: absolute;
		width: 300px;
		height: 100px;
		top: 90px;
		z-index: 2;
		&:hover {
			cursor: pointer;
		}
	}

	.bgImg {
		position: relative;
		width: 100%;
		height: 200px;
		filter: brightness(50%);
		z-index: 1;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const HeaderImgBox = styled.div``;
