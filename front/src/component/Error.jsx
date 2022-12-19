//styling
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import {
	ErrorPageLayout,
	ErrorMessage,
	ErrorClick,
	ErrorDetial,
} from 'src/styles/pageStyles/errorpageStyle';

//for _app errorboundary failbackcomponent

const ErrorPage = ({ error, resetErrorBoundary }) => {
	return (
		<>
			<ErrorPageLayout>
				<Section color={cssUnit.backgroundColors.Black}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							에러가 발생하였습니다.
							<br />
						</WrapTitle>
						{/* <ErrorDetial>{error.message}</ErrorDetial> */}
						<ErrorMessage>관리자에게 문의해주세요.</ErrorMessage>
						<ErrorClick href='/'>홈으로 돌아가기</ErrorClick>
					</Wrap>
				</Section>
			</ErrorPageLayout>
		</>
	);
};

//Error: The default export is not a React Component in page: "/404"

export default ErrorPage;
