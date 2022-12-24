//for style
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//Navibar full container

export const NaviContainer = styled.div`
	width: 100%;
	height: 50px;
	z-index: 2;
	color: ${cssUnit.colors.White};
	background-color: ${cssUnit.backgroundColors.Black};
	border-top: 0.1px soild #111111;

	.selectedColor {
		background-color: ${cssUnit.backgroundColors.DeepBlack};
	}

	.defaultColor {
		background-color: ${cssUnit.backgroundColors.Black};
	}

	position: sticky;
	/* z-index: 1; */
	top: 0px;

	@media screen and (max-width: 599px) {
		display: none;
	}
`;
//navibar basic layout
export const NavBarLayout = styled.div`
	display: flex;
	justify-content: space-around;
	text-align: center;

	font-family: ${cssUnit.fontFamily.NotoKR_G};

	ul {
		display: flex;
		justify-content: space-around;
		text-align: center;

		width: 1200px;
		height: 50px;
		margin: 0px;
		padding: 0px;
		line-height: 50px;

		list-style: none;

		div {
			text-decoration: none;
			width: 300px;
		}

		/* .brown {
			color: yellow;
		}
		.white {
			color: white;
		} */

		.selectedColor {
			font-weight: 600;

			color: ${cssUnit.colors.DarkGold};
			background-color: ${cssUnit.backgroundColors.DeepBlack};

			li {
				position: relative;

				:after {
					content: '';
					display: block;
					position: absolute;

					width: 50%;
					height: 0.5px;

					top: 80%;
					left: 25%;

					border-bottom: 1px solid ${cssUnit.colors.DarkGold};

					transition: all 0.3s ease-in;
				}
			}
		}

		.defaultColor {
			font-weight: 300;
			color: ${cssUnit.colors.White};
			background-color: ${cssUnit.backgroundColors.Black};

			li {
				:after {
					content: '';
					display: block;
					position: absolute;

					left: 50%;

					width: 0%;
					height: 0.7px;

					//margin-top: 3px;
					//border-bottom: 2px solid ${cssUnit.colors.DarkGold};

					transition: all 0.3s ease;
				}
			}
		}

		@media (max-width: 1500px) {
			width: 100%;
			div {
				width: 100%;
			}
		}
	}
`;

export const MenuLinkText = styled.div`
	text-decoration: none;
	color: ${cssUnit.colors.DarkGold};
	.selectedColor {
		font-weight: 600;
		color: ${cssUnit.colors.White};
		color: ${cssUnit.colors.DarkGold};
		background-color: ${cssUnit.backgroundColors.DeepBlack};
	}

	.defaultColor {
		color: ${cssUnit.colors.White};
		background-color: ${cssUnit.backgroundColors.Black};
	}
`;
