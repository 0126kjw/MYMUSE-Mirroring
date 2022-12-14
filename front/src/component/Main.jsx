import { css } from '@emotion/react';
import Image from 'next/image';
import cssUnit from 'src/lib/cssUnit';
//styling
import { Section, Wrap, WrapTop, WrapTitle } from 'src/styles/common';
import {
	MainContainer,
	MainTitleContainer,
	SilderContainer,
	MapContainer,
	AiContainer,
	AiExContainer,
	SerachBarContainer,
	AiChatRoomBox,
	AiChatButton,
	HumanBubble,
	AiBubble,
	SearchBarLayout,
} from 'src/styles/pageStyles/mainStyle';
import logo from '../../public/images/siteLogo.png';
import { useState } from 'react';

// component
import Slider from './Slider';
import SeoulZidoMain from './zido/SeoulZidoMain';
import TitleSection from './common/TitleSection';
import InfoModal from 'src/component/common/ai/InfoModal';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import KakaoBtn from './detail/KakaoShare';

const Main = () => {
	const router = useRouter();
	// InfoModal on off 처리
	const InfoModalRef = useRef();
	const [isInfoModalOn, setIsInfoModalOn] = useState(false);
	const modalCloseHandler = ({ target }) => {
		if (isInfoModalOn && !InfoModalRef.current.contains(target)) {
			setIsInfoModalOn('closed');
		}
	};
	useEffect(() => {
		window.addEventListener('click', modalCloseHandler);
		return () => {
			window.removeEventListener('click', modalCloseHandler);
		};
	});

	return (
		<>
			<MainContainer>
				<TitleSection color={cssUnit.backgroundColors.DeepBlack} size={'150px'}>
					<WrapTop>
						<MainTitleContainer>
							<div className='hegit-adjustment'>
								<div className='logoImg'>
									<Image
										src={logo}
										alt='logo'
										width={150}
										height={70}
										style={{ objectFit: 'contain', layout: 'fill' }}
									/>
								</div>
								<div className='logoText'>
									한 곳에서 보는 온라인 AI 전시정보 팜플렛
								</div>
							</div>
						</MainTitleContainer>
					</WrapTop>
				</TitleSection>

				<Section color={cssUnit.backgroundColors.White}>
					<Wrap>
						<WrapTitle>대표적인 박물관과 미술관들을 둘러보세요</WrapTitle>
						<SilderContainer>
							<Slider />
						</SilderContainer>
					</Wrap>
				</Section>

				<Section color={cssUnit.backgroundColors.Gray}>
					<Wrap>
						<WrapTitle>
							내 주변에 어떤 박물관/미술관이 있을까?
							<br />
							지도에 표시하며 살펴보세요
						</WrapTitle>
						<MapContainer>
							<SeoulZidoMain />
						</MapContainer>
					</Wrap>
				</Section>

				<Section color={cssUnit.backgroundColors.LightBlack}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							직접 검색하거나
							<br />
							Ai에게 물어볼 수 있어요
						</WrapTitle>
						<AiContainer>
							<SerachBarContainer>
								<SearchBarLayout>
									<div
										onClick={() => {
											router.push(`/search`);
										}}
									>
										<input value='국립중앙박물관' disabled />
										<span>🔍︎</span>
									</div>
								</SearchBarLayout>
							</SerachBarContainer>
							<AiExContainer>
								<AiChatRoomBox>
									<HumanBubble>12월에는 어떤 전시회들이 열려?</HumanBubble>
									<AiBubble>
										<p align='left'>
											<br />
											합스부르크 600년, 매혹의 걸작들
											<br />
											외규장각 의궤, 그 고귀함의 의미
											<br />
											대한제국 첫 궁중 연회
											<br />
											나탈리 카르푸센코 사진전 ......
											<br />
										</p>
									</AiBubble>
								</AiChatRoomBox>
								<AiChatButton
									onClick={() => {
										setIsInfoModalOn(true);
									}}
								>
									Ai 안내데스크 사용방법
								</AiChatButton>
							</AiExContainer>
						</AiContainer>
					</Wrap>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>
							<br />
							카카오톡으로 공유해보세요
						</WrapTitle>
						<KakaoBtn />
					</Wrap>
				</Section>
			</MainContainer>
			{isInfoModalOn && (
				<div ref={InfoModalRef}>
					<InfoModal setIsInfoModalOn={setIsInfoModalOn} />
				</div>
			)}
		</>
	);
};

export default Main;
