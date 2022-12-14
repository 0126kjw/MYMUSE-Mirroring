import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const UnderDevSection = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 600px;
	height: 100%;

	background-color: ${cssUnit.backgroundColors.White};
`;
