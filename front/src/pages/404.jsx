//styling
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import Link from 'next/link';

const FourZeroFourLayout = styled.div`
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
const ErrorMessage = styled.span`
	color: ${cssUnit.colors.Gray};
	font-weight: 100px;

	@media screen and (max-width: 300px) {
		font-size: 17px;
	}
`;
const ErrorClick = styled(Link)`
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

const FourZeroFour = () => {
	return (
		<>
			<FourZeroFourLayout>
				<Section color={cssUnit.backgroundColors.Black}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							404
							<br />
							Page Not Found
						</WrapTitle>
						<ErrorMessage>이 페이지는 존재하지 않습니다.</ErrorMessage>
						<ErrorClick href='/'>홈으로 돌아가기</ErrorClick>
					</Wrap>
				</Section>
			</FourZeroFourLayout>
		</>
	);
};

//Error: The default export is not a React Component in page: "/404"

export default FourZeroFour;
