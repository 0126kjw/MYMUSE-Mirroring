//styeld
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';

//styled
export const SearchBarLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 50px;

	margin: 0px auto;

	padding-top: 20px;

	//border: solid 1px gray;

	background-color: transparent;

	color: ${cssUnit.colors.White};

	.layout {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 900px) {
			width: 40%;
			flex-direction: column;
		}
	}

	.dropDonwLayout {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		background-color: ${cssUnit.colors.LightGray};
		border-radius: 0rem;

		height: 50px;

		@media screen and (max-width: 900px) {
			width: 100%;
		}
	}

	form {
		width: 100%;
		height: 100%;

		top: 5px;

		//border: 10px solid red;
	}

	.inputDiv-nontyping {
		position: relative;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 300px;
		height: 40px;

		background-color: white;

		//top: 5px;

		padding: 5px 0 5px 0;

		padding-left: 0px;

		font-size: ${cssUnit.fontSize.normal};

		outline: none;
		@media screen and (max-width: 900px) {
			width: 100%;
		}
	}

	.inputDiv-typing {
		position: relative;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 300px;
		height: 40px;

		font-size: ${cssUnit.fontSize.normal};
		background-color: red;

		padding: 5px 0 5px 0;

		border: 0;

		//padding-left: 10px;

		background-color: white;

		//top: 5px;
		outline: none;
		@media screen and (max-width: 900px) {
			width: 100%;
		}
	}

	input {
		width: 80%;
		height: 80%;

		padding-bottom: 7px;
		padding-top: 7px;
		padding-left: 5px;

		border: none;
		//border-radius: 0.5rem;
		background-color: white;

		font-family: 'Noto serif KR', sans-serif;

		font-size: ${cssUnit.fontSize.medium};

		color: ${cssUnit.colors.Black};

		@media screen and (max-width: 900px) {
			width: 100%;

			height: 26px;
		}
	}

	button {
		//margin-top: 10px;

		height: 50px;
		line-height: 26px;

		border: none;
		//border-radius: 0.5rem;
		background-color: ${cssUnit.colors.Gray};

		:hover {
			background-color: ${cssUnit.colors.DarkGray};
		}

		@media screen and (max-width: 900px) {
			display: none;
		}
	}

	/* .form-div {
		width: 100%;
		height: 20px;
		background-color: aquamarine;
	} */
	@media screen and (max-width: 900px) {
		height: 150px;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 0.1em;
		padding-top: 50px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const MobileButton = styled.div`
	//position: absolute;
	display: none;
	display: block;
	//position: relative;

	//float: right;

	width: 50px;
	height: 50px;

	//background-color: azure;

	top: -40px;
	left: 50px;

	cursor: pointer;

	margin: 0 auto;

	//background-color: gray;

	@media screen and (max-width: 600px) {
		width: 25px;
		height: 25px;
		top: -40px;
		left: 50px;
	}
	.search {
		position: relative;

		left: 5px;
		top: -5px;

		width: 40px;
		//height: 30px;
		padding: 10px 0;
		text-align: center;

		@media screen and (max-width: 600px) {
			left: 2.5px;
			top: -2.5;

			width: 20px;
			//height: 30px;
			padding: 5px 0;
			text-align: center;
		}

		.s_circle {
			width: 20px;
			height: 20px;
			border: 5px solid ${cssUnit.colors.Gray};
			border-radius: 50%;

			@media screen and (max-width: 600px) {
				width: 10px;
				height: 10px;
				border: 2.5px solid ${cssUnit.colors.Gray};
				border-radius: 50%;
			}
		}
		.s_rectangle {
			position: absolute;
			right: 0;
			bottom: 6px;
			width: 14px;
			transform: rotate(45deg);
			border: 3px solid ${cssUnit.colors.Gray};
			border-top-right-radius: 12px;
			border-bottom-right-radius: 12px;

			@media screen and (max-width: 600px) {
				position: absolute;
				right: 0;
				bottom: 3px;
				width: 7px;
				transform: rotate(45deg);
				border: 2px solid ${cssUnit.colors.Gray};
				border-top-right-radius: 6px;
				border-bottom-right-radius: 6px;
			}
		}
	}

	@media screen and (max-width: 900px) {
		padding-right: 10px;
	}
`;
