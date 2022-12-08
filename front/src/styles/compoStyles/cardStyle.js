import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

//CARD Component's styled exports

/* structure */
/* 
    [CardArticle](div)
    │　└ a tag (image)
    │　 　└ div(eachImg)
    │　 　    └Image/next
    │　[Label (popular / search)]
    ┝ [TextSection](div)
    	┝ Label(75/): span(title)
        ┝ Label(40/): span(period)
        └ Label(70/): span(place) 
*/

//eachImg, textsection
export const CardArticle = styled.article`
	width: 300px;
	height: 400px;

	margin: 0px;
	padding: 0px;

	list-style: none;
	background-color: transparent;

	cursor: default;
	:hover {
		box-shadow: 0 3px 5px ${cssUnit.colors.DarkGold};

		:nth-last-of-type(1) {
			border: none;
		}
	}

	.eachImg {
		position: relative;

		width: 100%;
		height: 210px;

		margin: 0 auto;
		padding: 0px;

		background-color: ${cssUnit.backgroundColors.Black};

		cursor: pointer;

		@media screen and (max-width: 320px) {
			width: 0;
		}
	}

	@media screen and (max-width: 350px) {
		width: 100%;
	}
`;

export const TextSection = styled.div`
	z-index: 0;
	position: absolute;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 300px;
	height: 190px;

	background-color: ${cssUnit.colors.White};
	/* z-index: 99; */

	font-size: 18px;
	line-height: 22px;

	@media screen and (max-width: 350px) {
		width: 100vw;
		margin-right: auto;
		left: 0;
		right: 0;
		overflow: scroll;
	}

	//z-index: unset;
`;

export const Label = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: ${(props) => {
		return props.size ? `${props.size}px` : '75px';
	}};

	padding: 10px 0 10px 0;

	z-index: 2;

	:nth-last-of-type(3) {
		border-bottom: solid 5px ${cssUnit.colors.DarkGold};

		background-color: ${cssUnit.colors.White};
		font-weight: bold;
		color: ${cssUnit.colors.Black};
		word-break: keep-all;
	}
	:nth-last-of-type(2) {
		border-bottom: solid 1px ${cssUnit.colors.Gray};
		background-color: transparent;

		font-weight: 200;

		@media screen and (max-width: 300px) {
			overflow: auto;
		}
	}
	:nth-last-of-type(1) {
		border-bottom: solid 2px ${cssUnit.colors.Gray};
		background-color: transparent;

		font-weight: 200;

		@media screen and (max-width: 300px) {
			font-size: ${cssUnit.fontSize.small};
			overflow: auto;
		}
	}
	//75px;
	@media screen and (max-width: 190px) {
		width: 100%;
	}
`;

//cardlist's styles
