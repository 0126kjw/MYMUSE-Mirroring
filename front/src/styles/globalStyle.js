import { css, Global } from '@emotion/react';
import cssUnit from 'lib/cssUnit';

export const GlobalStyles = (
	<Global
		styles={css`
			body {
				/* display: flex;
				justify-content: center;

				flex-direction: column; */

				height: 100vh;

				margin: 0px;
				padding: 0px;

				background-color: ${cssUnit.backgroundColors.White};

				font-family: 'Gothic A1', sans-serif;
				font-family: 'Noto Serif KR', serif;

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
