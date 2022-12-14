import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

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

	.page {
		padding-top: 0;
		padding-bottom: 0;
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

	word-break: keep-all;
`;

// //common Wrap title
export const WrapTitle = styled.h2`
	display: none;
	font-size: ${cssUnit.fontSize.medium};
	font-family: ${cssUnit.fontFamily.GowunBT};

	word-break: keep-all;

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};

	@media screen and (max-width: 450px) {
		display: block;
	}
`;

//css ani
export const WrapTitleFirst = styled.h2`
	font-size: ${cssUnit.fontSize.medium};
	font-family: ${cssUnit.fontFamily.GowunBT};

	word-break: keep-all;

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};

	display: grid;
	place-items: center;

	.full {
		width: 33ch;
		animation: typing 2s
				steps(
					${(props) => {
						return props.steps ? props.steps : 30;
					}}
				),
			blink 0.5s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-size: 24;

		overflow-x: hidden;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	@media screen and (max-width: 450px) {
		.full {
			display: none;
		}
	}
`;
