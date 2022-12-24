//styling
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import { ErrorPageLayout, ErrorMessage, ErrorClick } from 'src/styles/pageStyles/errorpageStyle';

const FourZeroFour = () => {
	return (
		<>
			<ErrorPageLayout>
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
			</ErrorPageLayout>
		</>
	);
};

//Error: The default export is not a React Component in page: "/404"

export default FourZeroFour;
