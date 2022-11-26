import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

//logo trying
// import { Logo } from 'styles/common/index';

import Image from 'next/image';
import logo from '../../../public/images/siteLogo.png';

// //logo trying
// export const Logo = styled.Image.attrs({
// 	src: logo,
// 	alt: 'logo_image',
// })`
// 	cursor: pointer;
// 	width: 131px;
// 	height: 450px;
// `;

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
