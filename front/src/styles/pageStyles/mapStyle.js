import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const ZidoContainer = styled.div`
	width: 100%;
	// height: auto;
	margin: 0px auto;

	background-color: ${cssUnit.colors.White};
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	main {
		text-align: center;
	}
`;
