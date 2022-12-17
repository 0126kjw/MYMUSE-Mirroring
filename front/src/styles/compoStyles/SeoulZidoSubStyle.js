import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const SubZidoLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.colors.White};
	margin: 0px auto;
	margin-top: 120px;
	padding: 0px;

	max-width: 800px;
	width: 100%;

	@media screen and (max-width: 1000px) {
		width: 96%;
	}

	.mapDescBox {
		position: relative;
		width: 800px;
		color: ${cssUnit.colors.DarkGold};

		height: 50px;
		line-height: 50px;
		background-color: ${cssUnit.colors.White};

		//padding-bottom: 40px;

		font-family: ${cssUnit.fontFamily.NotoKR_G};
		font-size: ${cssUnit.fontSize.large};

		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}

	.react-simple-maps {
		width: 800px;
		/* padding-bottom: 10px; */

		background-color: ${cssUnit.colors.LightGray};
		/* border: solid 5px gray; */
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
				font-family: ${cssUnit.fontFamily.PreTended};

				@media screen and (max-width: 600px) {
					width: 80%;
					font-size: 19px;
					word-break: keep-all;

					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
			h1 {
				font-family: ${cssUnit.fontFamily.Hahmlet};

				@media screen and (max-width: 600px) {
					max-width: 100%;

					padding: 0px;

					font-size: 13px;

					//overflow: hidden;

					padding: 0 10px 0 10px;

					word-break: break-all;
				}
			}

			p {
				font-family: ${cssUnit.fontFamily.PreTended};
				font-weight: 300;

				@media screen and (max-width: 600px) {
					font-size: 12px;
					word-break: keep-all;

					text-overflow: ellipsis;
					overflow: hidden;

					font-size: 16px;

					display: -webkit-box;
					-webkit-line-clamp: 2; // 원하는 라인수
					-webkit-box-orient: vertical;

					font-family: ${cssUnit.fontFamily.PreTended};
					font-weight: 200;
				}
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

		/* @media screen and (max-width: 600px) {
			width: 100%;
			font-size: 19px;
			word-break: keep-all;
		} */
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		position: relative;
		background-color: ${cssUnit.colors.White};
		color: gray;
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-weight: 400;
		word-spacing: -2px;
		font-size: 23px;

		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
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
	.guideText3 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		position: relative;
		background-color: ${cssUnit.colors.White};
		color: gray;
		font-family: ${cssUnit.fontFamily.GowunBT};
		font-weight: 400;
		word-spacing: -2px;
		font-size: 23px;

		//margin-top: 40px;
		//margin-bottom: 40px;
		//padding-top: 20px;
		padding-bottom: 20px;
		@media screen and (max-width: 1000px) {
			//width: 100%;
			width: 80%;
			left: 10%;
			font-size: 20px;
		}
		p {
			margin: 0 auto;
			padding: 0;
		}
	}
	.tooltipStyle {
		color: red;
		font-size: 20px;
		/* background-color: ${cssUnit.colors.White}; */
		font-family: ${cssUnit.fontFamily.NotoKR_G};
	}

	.dataFetchingMsg {
		margin-top: 250px;
		color: ${cssUnit.colors.DeepBlack};
		font-family: ${cssUnit.fontFamily.NotoKR_G};
		font-size: 25px;
	}
`;

export default SubZidoLayout;
