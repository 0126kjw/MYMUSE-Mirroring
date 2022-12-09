import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

/**
 * cardlistStyle.js
 *
 * SubTitle*
 * ---
 * PageLayout*
 * 	ListSectiion*
 *   	Wrap (article)(common/index)
 *    		AllCardsLists(Component)
 *     			-AllListUl(ul)*
 */

//in title
export const SubTitle = styled.div`
	font-size: ${cssUnit.fontSize.small};
	font-weight: 100;
	color: ${cssUnit.colors.Gray};
`;
//Base layout for all page
export const PageLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: ${cssUnit.fontSize.normal};

	.subTitle {
		padding-top: 50px;
	}
	.searchRes {
		margin: 40px auto;
		font-size: 25px;
		border-radius: 10px;
		width: 300px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 1px black;
	}
`;
//Base layout for list section
export const ListSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 1200px;
	height: ${(props) => {
		return props.size ? props.size : '100%';
	}};

	padding-top: 0;
	//padding-bottom: 50px;

	margin: 0;
	/* background-color: ${(props) => props.color}; */
	background-color: ${(props) => {
		return props.color ? props.color : '';
	}};

	@media screen and (max-width: 1200px) {
		width: 100%;
	}

	@media screen and (max-width: 599px) {
		height: ${(props) => {
			return props.size ? props.size : '100%';
		}};
	}
`;
//styled component for ul
//Grid
export const AllListUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 1em;
	column-gap: 0.3em;

	margin: 0px auto;
	margin-top: 0.5em;
	padding: 1em;
	//padding-top: 0.1em;

	border: 2px solid ${cssUnit.colors.Gray};
	background-color: transparent;

	@media screen and (max-width: 1078px) {
		width: 100%;

		padding: 10px;

		border: 0;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
	}

	@media screen and (max-width: 650px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media screen and (max-width: 350px) {
		border: 1px;
	}
`;
