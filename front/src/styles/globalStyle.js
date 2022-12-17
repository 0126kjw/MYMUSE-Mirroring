import { css, Global } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';

/**FONT */
// font-family: 'Gothic A1', sans-serif; (AI봇, 타이틀 일부)
// font-family: 'Hahmlet', serif;
// font-family: 'Nanum Myeongjo', serif;
// font-family: 'Noto Serif KR', serif; (기본) (light 300, semibold 600)
// font-family: 'Gowun Batang', serif
//font-family: 'Noto Sans KR', sans-serif;
//font-family: 'Pretendard'

export const GlobalStyles = (
	<Global
		styles={css`
			body {
				position: relative;

				margin: 0px;
				padding: 0px;

				background-color: ${cssUnit.backgroundColors.Black};
				font-family: 'Pretendard', sans-serif;

				font-weight: 400;
				font-size: ${cssUnit.fontSize.normal};
			}
		`}
	/>
);
