import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const DropDownLabel = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 200px;
	height: 50px;

	//background-color: ${cssUnit.colors.Gray};
	background-color: transparent;
	//border-radius: 0.1rem;

	text-align: center;

	font-weight: 500;
	color: black;

	left: -10px;
	//top: 0px;
	z-index: 2;

	font-family: ${cssUnit.fontFamily.Hahmlet};

	:hover {
		:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			left: 10px;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}

	@media screen and (max-width: 900px) {
		width: 100%;
	}

	@media screen and (max-width: 500px) {
		font-size: 16px;
	}
`;

export const Optionlist = styled.ul`
	width: 100%;
	position: absolute;
	//box-sizing: border-box;

	background-color: white;

	padding-inline-start: 0;

	left: 10px;
	top: 30px;

	border-bottom-left-radius: 0.4rem;
	border-bottom-right-radius: 0.4rem;

	z-index: 98;

	@media screen and (max-width: 900px) {
		width: 100%;
		top: 32px;
	}

	@media screen and (max-width: 500px) {
		font-size: 16px;
	}
`;

export const Option = styled.li`
	position: relative;

	width: 100%;

	//left: -20px;

	box-sizing: border-box;
	padding: 3px;
	font-size: ${cssUnit.fontSize.normal};

	z-index: 99;

	list-style-type: none;
	text-align: center;

	font-weight: 200;
	color: black;

	//right: 10px;

	:hover {
		//width: 100%;
		color: ${cssUnit.colors.DeepBlack};
		font-weight: 600;
		text-decoration: underline dotted;

		background-color: ${cssUnit.colors.RealLightGray};
		//left: -5px;
	}

	@media screen and (max-width: 900px) {
		padding: 10px 0 10px 0;
	}
`;
