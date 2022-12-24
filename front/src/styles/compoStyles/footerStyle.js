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

	/* not working: ... */
	span {
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-weight: 100;
		color: ${cssUnit.colors.LightGray};
		//font-weight: 400;

		:nth-last-of-type(1) {
			font-weight: 100;

			@media screen and (max-width: 300px) {
				font-size: 14px;
			}
		}
	}
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

		:hover {
			cursor: pointer;
		}
	}
`;
