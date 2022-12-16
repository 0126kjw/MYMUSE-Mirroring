import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const SubZidoLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.colors.White};
	margin: 0px auto;
	margin-top: 120px;
	padding: 0px;
	width: 800px;

	@media screen and (max-width: 1000px) {
		width: 90%;
	}

	.mapDescBox {
		position: relative;
		width: 800px;
		color: ${cssUnit.colors.DarkGold};

		height: 50px;
		line-height: 50px;
		background-color: ${cssUnit.colors.White};

		//padding-bottom: 80px;
		padding-bottom: 40px;

		font-family: ${cssUnit.fontFamily.NotoKR_G};
		font-size: ${cssUnit.fontSize.large};

		//background-color: ${cssUnit.colors.DeepBlack};
		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}

	.react-simple-maps {
		width: 800px;
		padding-bottom: 10px;
		background-color: ${cssUnit.colors.LightGray};
		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}

	.pinListUps {
		width: 100%;
		margin: 0px auto;
		background-color: ${cssUnit.colors.White};
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 20px;

		ul {
			margin: 0px;
			div {
				margin-bottom: 20px;
			}
			h1 {
				font-family: ${cssUnit.fontFamily.Hahmlet};
			}
		}

		.basic {
			position: relative;
			background-color: ${cssUnit.colors.RealLightGray};
			width: calc(100% - 40px);
			height: 150px;
			border: solid 3px ${cssUnit.colors.LightGray};
			overflow: hidden;

			&:hover {
				background-color: ${cssUnit.colors.LightGray};
				font-weight: bold;
				cursor: pointer;
			}
		}

		.borderRed {
			position: relative;
			background-color: ${cssUnit.colors.LightGold};
			width: calc(100% - 40px);
			height: 150px;
			border: solid 5px ${cssUnit.colors.DarkGold};
			overflow: hidden;

			&:hover {
				background-color: ${cssUnit.colors.DarkGold};
				color: aliceblue;
				//font-weight: bold;
				cursor: pointer;
			}
		}
	}

	.circlePinViewer {
		position: absolute;
		text-align: left;
		top: 682px;
		width: 10px;
		z-index: 999;
		// background-color: green;
		margin-top: 40px;
		margin-bottom: 40px;

		padding-top: 20px;
		padding-bottom: 20px;

		ul {
			margin: 0px;
			padding: 0px;
		}

		li {
			list-style: none;
		}
	}

	.guideText {
		position: relative;
		background-color: ${cssUnit.colors.White};
		color: ${cssUnit.colors.DarkGold};
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-size: 25px;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
		@media screen and (max-width: 1000px) {
			width: 100%;
			font-size: 20px;
		}
	}
	.guideText2 {
		position: relative;
		background-color: gray;
		color: aqua;
		// font-weight: 500;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;

		background-color: ${cssUnit.colors.LightGray};
		color: ${cssUnit.colors.Black};
		font-family: ${cssUnit.fontFamily.GothicAi};

		@media screen and (max-width: 1000px) {
			width: 100%;
			font-size: 20px;
		}
	}
	.tooltipStyle {
		color: red;
		font-size: 25px;
	}

	.dataFetchingMsg {
		margin-top: 250px;
		color: ${cssUnit.colors.DeepBlack};
		font-family: ${cssUnit.fontFamily.NotoKR_G};
		font-size: 25px;
	}
`;

export default SubZidoLayout;
