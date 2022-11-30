import { css, Global } from '@emotion/react';
import cssUnit from 'lib/cssUnit';

export const GlobalStyles = (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
			@import url('https://fonts.googleapis.com/css?family=Gothic+A1:100');

			body {
				position: relative;

				margin: 0px;
				padding: 0px;

				background-color: ${cssUnit.backgroundColors.White};
				background-color: black;

				font-family: 'Noto serif KR', sans-serif;
				font-weight: 300;
				font-size: ${cssUnit.fontSize.normal};
			}
		`}
	/>
);
