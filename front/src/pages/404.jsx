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

	background-color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	main {
		text-align: center;
	}
`;
const ErrorMessage = styled.span`
	color: ${cssUnit.colors.Gray};
	font-weight: 100px;
`;
const ErrorClick = styled(Link)`
	width: 300px;
	height: 50px;

	margin: 30px;

	border: 0.5px solid ${cssUnit.colors.Gray};

	line-height: 50px;
	text-decoration: none;
	color: ${cssUnit.colors.DarkGold};

	:hover {
		background-color: ${cssUnit.colors.Gray};
		color: ${cssUnit.colors.Black};
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
