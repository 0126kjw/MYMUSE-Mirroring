import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//		border: 3px solid rgba(255, 255, 255, 0.6);
export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 300px;

	background-color: ${cssUnit.backgroundColors.Black};
`;

export const HeaderWraper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//for bgImg
	position: relative;

	width: 100%;
	height: 300px;

	.bgImg {
		position: relative;
		width: 100%;
		height: 250px;
		filter: brightness(50%);

		z-index: 1;

		&:hover {
			cursor: pointer;
		}
	}
`;
export const HeaderUpper = styled.div`
	width: 100%;
	height: 00px;

	position: relative;

	.logoImg {
		position: absolute;

		width: 300px;
		height: 100px;

		z-index: 2;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const HeaderLower = styled.div`
	width: 100%;
	height: 200px;
`;

export const HeaderTitleBox = styled.div``;
