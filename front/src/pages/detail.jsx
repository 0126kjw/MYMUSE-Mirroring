import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import Index from 'component/detail/Index';

//wrap all
const DetailContainer = styled.div`
	margin: 0px auto;
	background-color: ${cssUnit.colors.White};
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;
`;

export default function Detail() {
	return (
		<DetailContainer>
			<Section color={cssUnit.backgroundColors.Black} size={100}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>상세 전시관 페이지</WrapTitle>
				</Wrap>
			</Section>
			<Section size={900}></Section>
			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<Index />
					</UnderDevSection>
				</Wrap>
			</Section>
		</DetailContainer>
	);
}
