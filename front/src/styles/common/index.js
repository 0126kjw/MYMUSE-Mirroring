import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

/**Styling */

//sections
//common section
export const Section = styled.section`
	min-width: 1200px;
	height: ${(props) => {
		return props.size ? props.size : '850px';
	}};

	margin: 0;

	/* background-color: ${(props) => props.color}; */
	background-color: ${(props) => {
		return props.color ? props.color : '';
	}}; ;
`;
//common Wrap
export const Wrap = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	max-width: 950px;
	height: 100%;

	margin: 0px auto;
	text-align: center;
`;

//common Wrap title
export const WrapTitle = styled.h2`
	font-size: ${cssUnit.fontSize.medium};

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};
`;
