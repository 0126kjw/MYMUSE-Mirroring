import styled from '@emotion/styled';
import Link from 'next/link';
import cssUnit from 'src/lib/cssUnit';
export const ErrorPageLayout = styled.div`
	width: auto;
	height: auto;

	margin: 0px auto;
	padding: 150px 0 200px 0;

	background-color: ${cssUnit.backgroundColors.Black};
	font-family: ${cssUnit.fontFamily.PreTended};
	font-weight: 400;
	font-size: 25px;

	main {
		text-align: center;
	}

	@media screen and (max-width: 300px) {
		font-size: 17px;
	}
`;

export const ErrorMessage = styled.span`
	color: ${cssUnit.colors.Gray};
	font-weight: 100px;

	@media screen and (max-width: 300px) {
		font-size: 17px;
	}
`;
export const ErrorClick = styled(Link)`
	width: 300px;
	height: 50px;

	margin: 30px;

	border: 0.5px solid ${cssUnit.colors.Gray};

	line-height: 50px;
	text-decoration: none;
	color: ${cssUnit.colors.DarkGold};

	word-break: keep-all;

	:hover {
		background-color: ${cssUnit.colors.Gray};
		color: ${cssUnit.colors.Black};
		word-break: keep-all;
	}

	@media screen and (max-width: 450px) {
		width: 60%;
		height: 50px;
	}
`;

export const ErrorDetial = styled.div`
	width: 30%;
	height: 10%;

	padding: 1%;
	margin: 2%;
	//border: 2px solid white;
	color: ${cssUnit.colors.Gray};
	font-weight: 100px;
	font-size: 17px;

	text-align: left;

	@media screen and (max-width: 300px) {
		font-size: 12px;

		width: 40%;
		height: 50px;

		padding: 0;
		margin-bottom: 10px;

		text-overflow: ellipsis;
		overflow: hidden;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
`;
