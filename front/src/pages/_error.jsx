//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import Link from 'next/link';

const ErrorPageLayout = styled.div`
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

const ErrorPage = () => {
	return (
		<>
			<ErrorPageLayout>
				<Section color={cssUnit.backgroundColors.Black}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							Error
						</WrapTitle>
						<ErrorMessage>에러가 발생했습니다</ErrorMessage>
						<ErrorClick href='/'>홈으로 돌아가기</ErrorClick>
					</Wrap>
				</Section>
			</ErrorPageLayout>
		</>
	);
};

export default ErrorPage;
