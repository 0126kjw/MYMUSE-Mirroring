import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	bottom: 0;

	width: 100%;
	height: 150px;

	padding-top: 30px;

	background-color: ${cssUnit.backgroundColors.Black};

	color: ${cssUnit.colors.White};
`;
export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 950px;
`;
export const FooterTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	width: 100%;
	height: 50px;

	margin: auto;

	.logoImg {
		position: absolute;

		width: 300px;
		height: 100px;

		z-index: 2;
	}
	/* not working: ... */
	span {
		font-family: 'Courier New', Courier, monospace;
		font-weight: 100;
	}
`;
