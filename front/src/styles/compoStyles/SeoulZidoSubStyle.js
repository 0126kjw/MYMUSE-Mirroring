import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const SubZidoLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.backgroundColors.Gray};
	margin: 0px auto;
	margin-top: 120px;
	padding: 0px;
	width: 800px;

	.subLocationName {
		position: relative;
		width: 800px;
		color: brown;
		height: 50px;
		line-height: 50px;
		background-color: aliceblue;
	}

	.react-simple-maps {
		width: 800px;
		background-color: gray;
	}

	.leftArrow {
		position: absolute;
		top: 550px;
		left: 10px;
		font-size: 80px;
		color: black;
		z-index: 5;
		cursor: pointer;
	}

	.pinListUps {
		margin: 0px;
		background-color: gray;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
		ul {
			margin: 0px;
			padding-left: 30px;
			li {
				margin-bottom: 20px;
			}
		}

		.basic {
			position: relative;
			width: 700px;
			background-color: aliceblue;
			list-style: none;
			border: solid 10px aliceblue;
			margin: 10px;

			&:hover {
				background-color: pink;
				font-weight: bold;
				cursor: pointer;
			}
		}

		.borderRed {
			position: relative;
			width: 700px;
			background-color: aliceblue;
			list-style: none;
			border: solid 10px red;
			margin: 10px;

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
