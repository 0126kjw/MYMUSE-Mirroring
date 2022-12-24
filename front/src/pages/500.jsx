//styling
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import { ErrorPageLayout, ErrorMessage, ErrorClick } from 'src/styles/pageStyles/errorpageStyle';

const FiveZeroZero = () => {
	return (
		<>
			<ErrorPageLayout>
				<Section color={cssUnit.backgroundColors.Black}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>500</WrapTitle>
						<ErrorMessage>서버에서 에러가 발생하였습니다.</ErrorMessage>
						<ErrorClick href='/'>홈으로 돌아가기</ErrorClick>
					</Wrap>
				</Section>
			</ErrorPageLayout>
		</>
	);
};

//Error: The default export is not a React Component in page: "/404"

export default FiveZeroZero;
