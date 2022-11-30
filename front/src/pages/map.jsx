import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import TitleSection from 'component/common/TitleSection';
import SeoulZidoSub from 'component/zido/SeoulZidoSub';
import { ZidoContainer } from 'styles/pageStyles/mapStyle';
//for Seo
import SeoData from 'lib/seoData';
import Seo from 'component/Seo';

const Zido = () => {
	const PageData = SeoData.Map;
	return (
		<>
			<Seo title={PageData.title} description={PageData.description} ogUrl={PageData.ogUrl} />
			<ZidoContainer>
				<TitleSection color={cssUnit.backgroundColors.Black} size={100}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							서울 지도에서 박물관 검색
						</WrapTitle>
					</Wrap>
				</TitleSection>
				{/* <Section size={900}></Section> */}
				<Section color={cssUnit.backgroundColors.White} size={900}>
					<Wrap>
						<UnderDevSection>
							<SeoulZidoSub />
						</UnderDevSection>
					</Wrap>
				</Section>
			</ZidoContainer>
		</>
	);
};

export default Zido;
