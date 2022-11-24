import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

const font = css``;

export const GlobalStyles = (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');

			body {
				/* display: flex;
				justify-content: center;

				flex-direction: column; */

				margin: 0px;
				padding: 0px;

				height: 100vh;

				/* max-width: 100vw;
				max-height: 100vh;
				min-height: 100%; */

				/* padding: 3rem 1rem; */

				background-color: ${cssUnit.backgroundColors.White};

				font-family: 'Noto serif KR', sans-serif;
				font-weight: normal;
				font-size: ${cssUnit.fontSize.normal};

				/*
				main {
					text-align: center;
				} */
			}
		`}
	/>
);
