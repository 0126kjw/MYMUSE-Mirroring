import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

const font = css``;

export const GlobalStyles = (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
			@import url('https://fonts.googleapis.com/css?family=Gothic+A1:100');

			body {
				/* display: flex;
				justify-content: center;

				flex-direction: column; */

				height: 100vh;

				margin: 0px;
				padding: 0px;

				background-color: ${cssUnit.backgroundColors.White};

				font-family: 'Noto serif KR', sans-serif;
				font-weight: 300;
				font-size: ${cssUnit.fontSize.normal};

				/*
				main {
					text-align: center;
				} */
			}
		`}
	/>
);
