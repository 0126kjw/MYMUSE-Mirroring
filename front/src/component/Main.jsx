import { css } from '@emotion/react';
import Image from 'next/image';
//styling
import {
	MainContainer,
	MainTitleContainer,
	Logosection,
	SlideSection,
	MapSection,
	AiSection,
	SilderWrap,
	SilderContainer,
	MapContainer,
	SectionTitle,
	MapWrap,
	AiWrap,
	AiContainer,
	SectionTitleW,
	AiExContainer,
	SerachBarContainer,
	AiChatRoomBox,
	AiChatButton,
	HumanBubble,
	AiBubble,
	SearchBarLayout,
} from 'styles/pageStyles/mainStyle';

// component
import Slider from './Slider';
import SeoulZidoMain from './SeoulZidoMain';

const Main = () => {
	return (
		<>
			<MainContainer>
				<MainTitleContainer>메인타이틀 섹션</MainTitleContainer>
				<SlideSection>
					<SilderWrap>
						<SectionTitle>
							대표적인 박물관과 미술관들을 둘러보세요
						</SectionTitle>
						<SilderContainer>
							<Slider />
						</SilderContainer>
					</SilderWrap>
				</SlideSection>
				<MapSection>
					<MapWrap>
						<SectionTitle>
							내 주변에 어떤 박물관/미술관이 있을까?
							<br />
							지도에 표시하며 살펴보세요
						</SectionTitle>
						<MapContainer>
							<SeoulZidoMain />
						</MapContainer>
					</MapWrap>
				</MapSection>
				<AiSection>
					<AiWrap>
						<SectionTitleW>
							직접 검색하거나
							<br />
							Ai에게 물어볼 수 있어요
						</SectionTitleW>
						<AiContainer>
							<SerachBarContainer>
								<SearchBarLayout>
									<div>
										<input
											type='text'
											id='name'
											name='name'
											size='20'
											width='100'
											disabled
										/>
										<span>🔍︎</span>
									</div>
								</SearchBarLayout>
							</SerachBarContainer>
							<AiExContainer>
								<AiChatRoomBox>
									<HumanBubble>
										☆☆! 12월에 국중박에서는 어떤 전시가
										열려?
									</HumanBubble>
									<AiBubble>
										<p align='left'>
											<br />
											22년 12월 국립중앙박물관의
											<br /> 전시 일정을 찾으셨나요?
											<br />
											합스부르크 600년, 매혹의 걸작들
											<br />
											외규장각 의궤, 그 고귀함의 의미
											<br />
											대한제국 첫 궁중 연회
											<br />
											......
											<br />
										</p>
									</AiBubble>
								</AiChatRoomBox>
								<AiChatButton>
									Ai 안내데스크 바로가기
								</AiChatButton>
							</AiExContainer>
						</AiContainer>
					</AiWrap>
				</AiSection>
			</MainContainer>
		</>
	);
};

export default Main;
