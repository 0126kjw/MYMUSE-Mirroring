import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import SeoulZidoSub from 'component/zido/SeoulZidoSub';

//wrap all
const ZidoContainer = styled.div`
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
const ZidoSearchLayout = styled.div`
	.guideText {
		display: flex;
		justify-content: center;
		margin: 0px auto;
		padding-top: 50px;
		color: white;
	}
	.outerZido {
		display: flex;
		justify-content: center;
		margin: 0px auto;
		width: 90%;
		padding-top: 50px;
		padding-bottom: 50px;
		color: white;
	}
`;

export default function Zido() {
	return (
		<ZidoContainer>
			<Section color={cssUnit.backgroundColors.Black} size={100}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>서울 지도에서 박물관 검색</WrapTitle>
				</Wrap>
			</Section>
			<Section size={900}></Section>
			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<SeoulZidoSub />
					</UnderDevSection>
				</Wrap>
			</Section>
		</ZidoContainer>
	);
}
