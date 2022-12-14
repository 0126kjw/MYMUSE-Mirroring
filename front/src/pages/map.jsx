import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import { UnderDevSection } from 'src/styles/compoStyles/underDev';
import TitleSection from 'src/component/common/TitleSection';
import SeoulZidoSub from 'src/component/zido/SeoulZidoSub';
import { ZidoContainer } from 'src/styles/pageStyles/mapStyle';
//for Seo
import withGetServerSideProps from 'src/hocs/withServersideProps';

const Zido = () => {
	return (
		<>
			<ZidoContainer>
				<TitleSection color={cssUnit.backgroundColors.Black} size={100}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							서울 지도에서 박물관 검색
						</WrapTitle>
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
