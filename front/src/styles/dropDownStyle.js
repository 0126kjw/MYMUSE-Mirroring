import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const DropDownLabel = styled.div`
	position: relative;

	display: flex;
	//flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 50px;

	background-color: ${cssUnit.colors.Gray};
	border-radius: 0.4rem;

	text-align: center;

	font-weight: 500;
	color: black;
`;

export const Optionlist = styled.ul`
	width: 100%;
	position: absolute;
	//box-sizing: border-box;

	background-color: white;

	top: 30px;
	padding-inline-start: 0;

	border-bottom-left-radius: 0.4rem;
	border-bottom-right-radius: 0.4rem;

	z-index: 98;

	.selected {
	}

	/* li {
		position: relative;

		//left: -20px;

		//box-sizing: border-box;
		padding: 1px;
		font-size: ${cssUnit.fontSize.normal};

		z-index: 99;

		text-align: center;
		font-weight: 600;
		color: gray;
	} */
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

	:hover {
		color: ${cssUnit.colors.White};
		background-color: ${cssUnit.colors.DarkGray};
	}
`;
