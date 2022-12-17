import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const aiChatRoomStyle = styled.div`
	td {
		padding-left: 15px;
		padding-right: 15px;
	}
	.modalTopSection {
		position: fixed;

		width: 450px;
		max-width: 80%;

		right: 30px;

		border-left: solid 2px ${cssUnit.colors.DarkGold};
		border-right: solid 2px ${cssUnit.colors.DarkGold};
		border-top: solid 2px ${cssUnit.colors.DarkGold};
		border-radius: 10px 10px 0px 0px;

		background-color: ${cssUnit.colors.DeepBlack};

		color: white;

		overflow: hidden;

		/* @media screen and (max-width: 500px) {
		} */

		.topInnerSection {
			margin: 0 auto;
			width: 91%;
		}

		.ControlSection {
			display: flex;
			justify-content: space-between;
			align-items: center;

			width: 100%;
			height: 50px;

			margin-top: 5px;
		}

		.feedBackSection {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 89%;
			height: 30px;

			margin: auto;
			margin-top: 0px;
			margin-bottom: 25px;
			padding: 0px;

			border-radius: 5px;
			border: solid 5px ${cssUnit.colors.Black};

			background-color: ${cssUnit.colors.DarkGold};

			font-family: ${cssUnit.fontFamily.GowunBT};
			color: ${cssUnit.colors.LightGray};

			-webkit-transition: box-shadow 0.5s;
			transition: box-shadow 0.5s;

			overflow: hidden;

			p {
				font-weight: bold;

				@media screen and (max-width: 500px) {
					font-size: 12px;
					word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}
			&:hover {
				color: black;
				cursor: pointer;

				animation: pulse-black 2s infinite;
			}
			&:active {
				cursor: pointer;
				box-shadow: 3px 3px 3px 3px gray inset;
			}

			@keyframes pulse-black {
				0% {
					transform: scale(0.95);
					box-shadow: 0 0 0 0 rgba(250, 250, 250, 0.7);
				}

				70% {
					transform: scale(1);
					box-shadow: 0 0 0 40px rgba(250, 250, 250, 0);
				}

				100% {
					transform: scale(0.95);
					box-shadow: 0 0 0 0 rgba(250, 250, 250, 0);
				}
			}
		}
	}

	.AImodal-Outer {
		text-align: center;

		transform: rotateZ(180deg);
		resize: both;
		overflow: auto;
		position: fixed;

		right: 30px;
		bottom: 96px;

		height: 350px;
		width: 450px;
		max-width: 80%;

		margin: 0 auto;
		background-color: #d9d9d9;

		border-left: solid 2px ${cssUnit.colors.DarkGold};
		border-right: solid 2px ${cssUnit.colors.DarkGold};

		@media screen and (max-width: 500px) {
			width: 90%;
		}
	}

	.AImodal-Inner {
		transform: rotateZ(180deg);

		width: 100%;
		height: 100%;

		overflow: auto;
	}

	.AImodal-Inner::-webkit-scrollbar {
	}

	.AIsec2 {
		min-height: 450px;
		overflow: scroll;

		padding-left: 7px;
		padding-right: 7px;

		-ms-overflow-style: none;
		scrollbar-width: none;

		.msgFromAI {
			float: left;
			background-color: ${cssUnit.colors.White};

			margin: 1% 2% 0 2%;
			margin-bottom: 10px;
			padding: 2%;

			border-radius: 20px;
			border-end-start-radius: 0px;

			text-align: left;
			min-height: 20px;

			font-size: 18px;
			line-height: 25px;
			font-family: ${cssUnit.fontFamily.NotoKR};
			letter-spacing: -1px;

			word-break: keep-all;
			overflow: auto;

			h3 {
				font-family: ${cssUnit.fontFamily.Hahmlet};
				color: ${cssUnit.colors.DarkGray};
				font-size: 18px;
			}

			p {
				line-height: 21px;
				font-family: ${cssUnit.fontFamily.GowunBT};
				color: ${cssUnit.colors.DarkGray};
			}
			.mm {
				font-family: ${cssUnit.fontFamily.GothicAi};
			}
			.gold {
				color: ${cssUnit.colors.DarkGold};
			}
			.tip {
			}
			.tipspan {
				color: ${cssUnit.colors.DarkGold};
				font-weight: bold;
				border-bottom: 1px dotted ${cssUnit.colors.DarkGold};
			}
			a {
				text-decoration: none;
				font-family: ${cssUnit.fontFamily.NotoKR_G};
				color: ${cssUnit.colors.DarkGold};
			}

			@media screen and (max-width: 500px) {
				font-size: 12px;
				/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
			}
		}
		.msgFromHuman {
			float: right;

			margin: 1%;
			padding: 2%;
			min-height: 20px;

			border-radius: 20px;
			border-end-end-radius: 0px;

			background-color: ${cssUnit.colors.DarkGold};

			word-break: keep-all;
			text-align: left;

			font-size: 18px;
			line-height: 25px;
			font-family: ${cssUnit.fontFamily.NotoKR_G};
			letter-spacing: -1px;
			color: ${cssUnit.colors.White};

			@media screen and (max-width: 500px) {
				font-size: 12px;
				/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
			}
		}

		.emptyBox {
			width: 100%;
			clear: both;
			height: 6px;
		}
	}
	.AIsec2::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	.formDiv {
		position: fixed;

		display: flex;
		justify-content: center;
		align-items: center;

		bottom: 30px;
		right: 30px;

		width: 450px;
		height: 70px;
		max-width: 80%;

		background-color: ${cssUnit.colors.DarkGold};

		border-left: solid 2px ${cssUnit.colors.DarkGold};
		border-right: solid 2px ${cssUnit.colors.DarkGold};
		border-radius: 0px 0px 10px 10px;

		form {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 85%;
			height: 80%;

			input {
				flex-direction: row;

				width: 95%;
				height: 30px;

				background-color: #ffffff;
				border-radius: 5px;
				border: solid 1px #d9d9d9;

				@media screen and (max-width: 500px) {
					font-size: 12px;
					/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
				}
			}
		}
	}
	.horListBox {
		display: flex;

		width: 100%;
		overflow: scroll;

		background-color: #d9d9d9;
		border-radius: 10px;

		/* 가로 스크롤 */

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap;

		overflow: auto;

		/* 스크롤 없애기 */
		/* -ms-overflow-style: none; */
		/* scrollbar-width: none; */

		/* 
		//챗봇 모바일버전? 그리드로 처리하는 코드
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 0.5em;
		column-gap: 0.1em; */

		a {
			text-decoration: none;
			color: black;
		}
	}

	.horListBox::-webkit-scrollbar {
		/* 스크롤 없애기 */
		/* display: none; */
	}

	.horList {
		background: #ffffff;
		padding: 5px;
		min-width: 200px;
		height: 200px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0px;
	}
	.innerHorList {
		width: 170px;
		height: 170px;
		padding: 10px;
		border: solid 3px ${cssUnit.colors.DarkGold};
		background-color: ${cssUnit.backgroundColors.White};
		border-radius: 5px;
		overflow: hidden;

		&:hover {
			background-color: ${cssUnit.colors.RealLightGray};
			cursor: pointer;
		}
		img {
			width: 150px;
			height: 100px;
			object-fit: cover;
		}
	}

	.singleOne {
		border: solid 1px ${cssUnit.colors.DarkGold};
		border-radius: 5px;
		padding: 5px;
		margin: 5px;
		width: 200px;
		height: 200px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffffff;
		&:hover {
			background-color: ${cssUnit.backgroundColors.Gray};
			background-color: beige;
			cursor: pointer;
		}
		img {
			width: 150px;
			height: 150px;
			object-fit: cover;
		}

		a {
			text-decoration: none;
			color: black;
		}
	}

	.infoButton {
		background-color: ${cssUnit.colors.LightGray};
		border: solid 1px ${cssUnit.colors.DarkGold};
		color: ${cssUnit.colors.DarkGold};
		font-size: 20px;
		font-weight: bold;
		width: 50px;
		height: 35px;
		//font-style: italic;
		border-radius: 50px;
		margin: 10px 0 10px 10px;
		cursor: pointer;
		:hover {
			background-color: ${cssUnit.colors.Black};
			color: ${cssUnit.colors.DarkGold};
		}

		@media screen and (max-width: 200px) {
			font-size: 12px;
			width: 25px;
			height: 17px;

			/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
		}
	}

	.closeButton {
		display: inline-block;
		//background-color: #222222;
		color: #997a4c;
		//border: solid 1px #222222;
		//border-radius: 50px;
		background-color: ${cssUnit.colors.Black};
		cursor: pointer;
		font-size: 10px;
		font-weight: bold;
		height: 25px;
		outline: 0;
		border: 0.5px solid ${cssUnit.colors.DarkGray};
		margin-bottom: 10px;

		:hover {
			background-color: ${cssUnit.colors.DarkGold};
			color: ${cssUnit.colors.Black};
		}
	}
	.enterButton {
		margin-top: 3px;
		margin-right: 10px;
		//margin-left: 5px;
		padding: 0px;
		//border: solid 1px gray;
		//border: solid 1px ${cssUnit.colors.LightBlack};
		//background-color: gray;
		border: 0;
		background-color: ${cssUnit.colors.DarkGold};
		font-size: 20px;
		cursor: pointer;
	}
`;

export default aiChatRoomStyle;
