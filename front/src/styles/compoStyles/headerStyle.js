import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 230px;

	background-color: ${cssUnit.backgroundColors.DeepBlack};

	@media screen and (max-width: 599px) {
		display: none;
	}
`;

export const ImageWraper = styled.div`
	/* width: 100vw; */
	width: 100%;
	height: 250px;
	//react_devtools의 경고 (dont' use static, use relative)
	//position: static;
	position: relative;

	.bgImg {
		background-color: ${cssUnit.backgroundColors.DeepBlack};
		border: 0.1px solid #111111;

		// filter: brightness(50%) blur(0.5px);

		&:hover {
			cursor: pointer;
		}
	}
`;
export const HeaderUpper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: left;

	position: relative;

	width: 100%;
	height: 0;

	margin-left: 20px;

	z-index: 2;

	// border: 0.1em solid red;

	.logoImg {
		position: absolute;
		/* width: 200px; */
		height: 40px;
		top: 180px;
		left: 2%;
		z-index: 2;
		background-color: transparent;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const HeaderLower = styled.div`
	position: sticky;
	top: 0px;
`;
