import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

export const Section = styled.section`
	width: 100%;
	height: ${(props) => {
		return props.size ? props.size : '100%';
	}};

	:nth-of-type(2),
	:nth-of-type(3),
	:nth-of-type(4) {
		padding-top: 100px;
		padding-bottom: 130px;
	}

	margin: 0;
	/* background-color: ${(props) => props.color}; */
	background-color: ${(props) => {
		return props.color ? props.color : '';
	}};

	@media screen and (max-width: 599px) {
		height: ${(props) => {
			return props.size ? props.size : '100%';
		}};
		:nth-of-type(2),
		:nth-of-type(3),
		:nth-of-type(4) {
			padding-top: 70px;
			padding-bottom: 100px;
		}
	}
`;
//common Wrap
export const Wrap = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	margin: 0px auto;
	text-align: center;
`;

//common Wrap
export const WrapTop = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	margin: 0px auto;
	text-align: center;
`;

//common Wrap title
export const WrapTitle = styled.h2`
	font-size: ${cssUnit.fontSize.medium};

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};
`;
