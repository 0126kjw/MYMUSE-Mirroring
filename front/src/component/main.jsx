import {
	MainContainer,
	MainTitleContainer,
	Logosection,
	SlideSection,
	MapSection,
	AiSection,
	SilderPart,
	MapPart,
	SilderContainer,
	MapContainer,
	SectionTitle,
} from 'styles/pageStyles/mainStyle';
import Image from 'next/image';

import { css } from '@emotion/react';
// component

import SearchBar from './SearchBar';
import Slider from './Slider';

import SeoulZido from './SeoulZido';
const Section = css`
	min-width: 1200px;
	height: 900px;
`;
//	<Slider />
const Main = () => {
	return (
		<>
			<MainContainer>
				<MainTitleContainer>메인타이틀 섹션</MainTitleContainer>
				<SlideSection>
					<SilderPart>
						<SectionTitle>
							대표적인 박물관과 미술관들을 둘러보세요
						</SectionTitle>
						<SilderContainer>
							<Slider />
						</SilderContainer>
					</SilderPart>
				</SlideSection>
				<MapSection>
					<MapPart>
						<MapContainer>
							<SeoulZido />
						</MapContainer>
					</MapPart>
				</MapSection>
				<AiSection>AI섹션</AiSection>

				{/* <AiBot></AiBot> */}
			</MainContainer>
		</>
	);
};

export default Main;
