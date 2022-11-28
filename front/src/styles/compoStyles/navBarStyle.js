import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

//for link
import Link from 'next/link';

export const NaviContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 50px;

	background-color: ${cssUnit.backgroundColors.Black};

	border-top: 0.1px soild #111111;
`;

export const NavBarLayout = styled.div`
	ul {
		display: flex;
		justify-content: space-around;
		text-align: center;

		width: 1200px;
		height: 50px;

		margin: 0px;

		padding-left: 0px;

		background-color: ${cssUnit.backgroundColors.Black};

		line-height: 50px;

		span {
			color: ${cssUnit.colors.White};
			text-decoration: none;
		}
		li {
			display: inline-block;
			list-style: none;

			&:hover {
				cursor: pointer;
				background-color: ${cssUnit.backgroundColors.DeepBlack};
				border: ${cssUnit.backgroundColors.Black};
			}

			width: 300px;
			height: 50px;

			border-right: 0.005em solid ${cssUnit.colors.DarkGray};
			border-left: 0.005em solid ${cssUnit.colors.DarkGray};

			//border-top: 0.2px solid ${cssUnit.colors.DarkGray};
			//border-bottom: 0.2px solid ${cssUnit.colors.DarkGray};
		}

		.Home {
		}
		.Map {
		}
		.Search {
		}
		.Popular {
		}
		.leftEnd {
			border-right: 0.005em solid ${cssUnit.colors.DarkGray};
			border-left: none;
		}
		.rightEnd {
			border-right: none;
			border-left: 0.005em solid ${cssUnit.colors.DarkGray};
		}
	}
`;

export const LinkButton = styled(Link)`
	display: inline-block;
	list-style: none;

	&:hover {
		cursor: pointer;
		background-color: ${cssUnit.backgroundColors.DeepBlack};
		border: ${cssUnit.backgroundColors.Black};
	}

	width: 300px;
	height: 50px;

	border-right: 0.005em solid ${cssUnit.colors.DarkGray};
	border-left: 0.005em solid ${cssUnit.colors.DarkGray};
`;
