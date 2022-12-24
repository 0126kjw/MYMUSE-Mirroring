//styling
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import { ErrorPageLayout, ErrorMessage, ErrorClick } from 'src/styles/pageStyles/errorpageStyle';

const Error = ({ statusCode }) => {
	return (
		<>
			<ErrorPageLayout>
				<Section color={cssUnit.backgroundColors.Black}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>Error</WrapTitle>
						{statusCode ? (
							<>
								<ErrorMessage>${statusCode} 에러가 발생했습니다</ErrorMessage>
							</>
						) : (
							<ErrorMessage> Client에서 에러가 발생했습니다</ErrorMessage>
						)}
						<ErrorClick href='/'>홈으로 돌아가기</ErrorClick>
					</Wrap>
				</Section>
			</ErrorPageLayout>
		</>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
