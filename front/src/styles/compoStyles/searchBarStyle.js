//styeld
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';

//styled
export const SearchBarLayout = styled.div`
	display: grid;
	grid-template-columns: 3fr 4fr 1fr;
	column-gap: 0.3em;

	width: 35%;
	height: 50px;

	margin: 0px auto;

	//border: solid 1px gray;

	background-color: transparent;

	color: ${cssUnit.colors.White};

	form {
		width: 100%;
	}

	input {
		width: 97%;
		height: 35px;

		padding-bottom: 7px;
		padding-top: 7px;
		padding-left: 5px;

		border: none;
		border-radius: 0.5rem;
		background-color: ${cssUnit.colors.White};

		font-family: 'Noto serif KR', sans-serif;

		font-size: ${cssUnit.fontSize.medium};

		color: ${cssUnit.colors.Black};
	}

	button {
		//margin-top: 10px;

		height: 50px;
		line-height: 26px;

		border: none;
		border-radius: 0.5rem;
		background-color: ${cssUnit.colors.Gray};

		:hover {
			background-color: ${cssUnit.colors.DarkGray};
		}
	}
	@media screen and (max-width: 900px) {
		height: 150px;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 0.1em;
	}
`;
