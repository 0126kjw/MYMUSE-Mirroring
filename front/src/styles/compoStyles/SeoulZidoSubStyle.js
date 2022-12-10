import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const SubZidoLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.backgroundColors.Gray};
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
		color: brown;
		height: 50px;
		line-height: 50px;
		background-color: aliceblue;

		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}

	.react-simple-maps {
		width: 800px;
		background-color: gray;
		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}

	.pinListUps {
		width: 100%;
		margin: 0px auto;
		background-color: gray;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 20px;

		ul {
			margin: 0px;
			div {
				margin-bottom: 20px;
			}
		}

		.basic {
			position: relative;
			background-color: aliceblue;
			width: calc(100% - 40px);
			height: 150px;
			border: solid 5px aliceblue;
			overflow: hidden;

			&:hover {
				background-color: pink;
				font-weight: bold;
				cursor: pointer;
			}
		}

		.borderRed {
			position: relative;
			background-color: aliceblue;
			width: calc(100% - 40px);
			height: 150px;
			border: solid 5px red;
			overflow: hidden;

			&:hover {
				background-color: pink;
				font-weight: bold;
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
		background-color: gray;
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
		color: red;
		font-size: 25px;
	}
`;

export default SubZidoLayout;
