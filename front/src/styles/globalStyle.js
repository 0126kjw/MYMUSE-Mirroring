import { css, Global } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';

export const GlobalStyles = (
	<Global
		styles={css`
			body {
				position: relative;

				margin: 0px;
				padding: 0px;

				background-color: ${cssUnit.backgroundColors.Black};
				//background-color: black;

				font-family: 'Gothic A1', sans-serif;
				font-family: 'Noto Serif KR', serif;

				font-weight: 300;
				font-size: ${cssUnit.fontSize.normal};
			}
		`}
	/>
);
