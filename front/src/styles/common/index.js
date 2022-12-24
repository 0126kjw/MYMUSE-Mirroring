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

	/* .sns {
		border: 2px solid black;
		border-radius: 25%;
		:hover {
			border: 2px solid red;
		}
	} */
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
	display: block;
	font-size: ${cssUnit.fontSize.medium};
	font-family: ${cssUnit.fontFamily.GowunBT};

	word-break: keep-all;

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};
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
		width: ${(props) => {
			return props.steps ? `${props.steps + 5}ch` : `33ch`;
		}};

		animation: typing 2s
				steps(
					${(props) => {
						return props.steps ? props.steps : 30;
					}}
				),
			blink 0.5s step-end
				${(props) => {
					return props.stop ? `${props.stop}` : `infinite`;
				}}
				alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-size: 24;

		border-color: ${(props) => {
			return props.cursorColorOff ? `${props.cursorColorOff}` : `transparent`;
		}};

		overflow-x: hidden;

		animation-delay: ${(props) => (props.timer ? `${props.timer}s` : `0`)};
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		100% {
			border-color: ${(props) => (props.cursorColoron ? `${props.cursorColoron}` : `white`)};
		}
	}

	@media screen and (max-width: 450px) {
		.full {
			display: none;
		}
	}
`;

//Wrap title
export const MapWrapTitle = styled.h2`
	position: relative;
	width: 100%;

	list-style: none;

	padding-top: 10px;
	padding-bottom: 15px;

	margin: 0;

	color: ${cssUnit.colors.White};
	font-size: ${cssUnit.fontSize.medium};
	text-align: center;
	line-height: 50px;

	background-color: ${cssUnit.colors.DeepBlack};
	list-style: none;

	font-family: ${cssUnit.fontFamily.NotoKR};
	font-weight: 600;

	li {
		//position: relative;

		:after {
			content: '';
			display: block;
			position: absolute;

			width: 20vw;
			height: 0.5px;

			top: 75%;
			left: 40%;

			border-bottom: 5px solid ${cssUnit.colors.DarkGold};
		}
	}

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};

	@media screen and (max-width: 500px) {
		font-size: 18px;
		/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
	}
`;
