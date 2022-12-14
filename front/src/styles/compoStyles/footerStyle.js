import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const FooterContainer = styled.footer`
	z-index: 1;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100px;
	padding-top: 30px;
	padding-bottom: 15px;

	background-color: ${cssUnit.backgroundColors.Black};
	color: ${cssUnit.colors.White};

	overflow-x: hidden;
`;
export const FooterWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	max-width: 950px;
`;
export const FooterTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	width: 100%;
	height: 50px;

	.logoImg {
		position: relative;

		width: 300px;
		height: 100px;

		overflow-x: hidden;
	}
	/* not working: ... */
	span {
		font-family: 'Courier New', Courier, monospace;
		font-weight: 100;
	}
`;
