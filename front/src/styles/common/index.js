//logo trying
// import { Logo } from 'styles/common/index';

import styled from '@emotion/styled';
import Image from 'next/image';
import logo from '../../../public/images/siteLogo.png';

export const Logo = styled.Image.attrs({
	src: logo,
	alt: 'logo_image',
})`
	cursor: pointer;
	width: 131px;
	height: 450px;
`;
