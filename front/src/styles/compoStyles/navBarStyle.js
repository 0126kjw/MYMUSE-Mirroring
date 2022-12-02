//for link
import Link from 'next/link';
//for style
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//Navibar full container

export const NaviContainer = styled.div`
	width: 100%;
	height: 50px;
	z-index: 0;
	color: ${cssUnit.colors.White};
	background-color: ${cssUnit.backgroundColors.Black};
	border-top: 0.1px soild #111111;
`;
//navibar basic layout
export const NavBarLayout = styled.div`
	ul {
		display: flex;
		justify-content: space-around;
		text-align: center;

		height: 50px;
		margin: 0px;
		padding: 0px;

		background-color: ${cssUnit.backgroundColors.Black};
		line-height: 50px;

		div {
			text-decoration: none;
		}

		.brown {
			color: yellow;
		}
		.white {
			color: white;
		}
	}
`;
//styling Link/next
// export const LinkButton = styled(Link)`
// 	display: inline-block;
// 	list-style: none;

// 	&:hover {
// 		cursor: pointer;
// 		background-color: ${cssUnit.backgroundColors.DeepBlack};
// 		border: ${cssUnit.backgroundColors.Black};
// 	}

// 	background-color: ${(prop) => {
// 		return prop.selected ? `${cssUnit.backgroundColors.DeepBlack}` : '';
// 		// return prop.selected ? `${cssUnit.Colors.DeepBlack}` : '';
// 	}};
// `;
