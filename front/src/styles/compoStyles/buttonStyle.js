import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const MoreButtonDiv = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 80px;

	z-index: 2;
`;

const MovingArrow = keyframes`
from {
			transform: translate(0, -10);
		}
		to {
			transform: translate(0, 30px);
			opacity: 10%;
		}

`;

export const ButtonImage = styled.div`
	position: absolute;

	width: 40px;
	height: 40px;

	z-index: 1;
	background-color: transparent;
	&:hover {
		cursor: pointer;
		animation-name: ${MovingArrow};
		animation-duration: 0.8s;
		animation-timing-function: linear;

		animation-iteration-count: 5;
	}
`;
