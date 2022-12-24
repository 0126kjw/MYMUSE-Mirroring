import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, MapWrapTitle } from 'src/styles/common';
import { UnderDevSection } from 'src/styles/compoStyles/underDev';
import TitleSection from 'src/component/common/TitleSection';
import SeoulZidoSub from 'src/component/zido/SeoulZidoSub';
import { ZidoContainer } from 'src/styles/pageStyles/mapStyle';
import { SubTitle } from 'src/styles/compoStyles/cardlistStyle';
//for Seo
import withGetServerSideProps from 'src/hocs/withServersideProps';

const Zido = () => {
	return (
		<>
			<ZidoContainer>
				<TitleSection color={cssUnit.backgroundColors.Black} size={100}>
					<Wrap>
						<MapWrapTitle color={cssUnit.colors.White}>
							<li>박물관 찾아보기</li>
						</MapWrapTitle>
						<SubTitle>서울시의 박물관을 지도에서 찾아보기</SubTitle>
					</Wrap>
				</TitleSection>
				{/* <Section size={900}></Section> */}
				{/* <Section color={cssUnit.backgroundColors.White} size={900}> */}
				<Wrap>
					<UnderDevSection>
						<SeoulZidoSub />
					</UnderDevSection>
				</Wrap>
				{/* </Section> */}
			</ZidoContainer>
		</>
	);
};

export default Zido;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	return {
		props: {},
	};
});
