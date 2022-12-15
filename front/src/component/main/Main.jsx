import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
//styling
import cssUnit from 'src/lib/cssUnit';
import { Section, Wrap, WrapTop, WrapTitle, WrapTitleFirst } from 'src/styles/common';
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
	SNSTitle,
	SNSSpaceLayout,
} from 'src/styles/pageStyles/mainStyle';
import logo from '../../../public/images/siteLogo.png';
import { useState } from 'react';
// component
import Slider from './Slider';
import SeoulZidoMain from 'src/component/zido/SeoulZidoMain';
import TitleSection from 'src/component/common/TitleSection';
import InfoModal from 'src/component/common/ai/InfoModal';
// for kakao
import ShareToKakao from './ShareToKakao';
import ShareToTwitter from './ShareToTwitter';
import ShareToFacebook from './ShareToFacebook';
import AutoTyper from './AutoTyper';
//api
import { Get } from 'src/utils/api';

// import KakaoBtn from './KakaoShare';
// import KakaoBtn from './KakaoShare';
// import KakaoBtn from './KakaoShare';

const Main = () => {
	const router = useRouter();
	const [satisfaction, setSatisfaction] = useState(0);
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

	const getSatisfaction = async () => {
		const res = await Get(['chatbots', 'satisfaction']);
		setSatisfaction(res.goodFeeling);
	};
	useEffect(() => {
		getSatisfaction();
	}, []);

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
								<h2>한 곳에서 보는 온라인 AI 전시정보 팜플렛</h2>
							</div>
						</MainTitleContainer>
					</WrapTop>
				</TitleSection>
				<Section color={cssUnit.backgroundColors.White}>
					<Wrap>
						<AutoTyper
							sentence={`대표적인 박물관과 미술관들을 둘러보세요.`}
							color={cssUnit.backgroundColors.Black}
						/>
						<SilderContainer>
							<Slider />
						</SilderContainer>
					</Wrap>
				</Section>
				<Section color={cssUnit.backgroundColors.Gray}>
					<Wrap>
						<AutoTyper
							sentence={`내 주변에 어떤 박물관/미술관이 있을까?`}
							color={cssUnit.backgroundColors.Black}
						/>
						<MapContainer>
							<SeoulZidoMain />
						</MapContainer>
					</Wrap>
				</Section>
				<Section color={cssUnit.backgroundColors.LightBlack}>
					<Wrap>
						<AutoTyper
							sentence={`직접 검색하거나 ${satisfaction}%의 긍정 후기를 받은 AI에게 모르는 부분을 물어보세요!`}
							color={cssUnit.backgroundColors.White}
						/>
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
											합스부르크 600년 매혹의 걸작들, 외규장각 의궤 그
											고귀함의 의미, 대한제국 첫 궁중 연회, 나탈리 카르푸센코
											사진전 ......
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
						<SNSTitle color={cssUnit.colors.White}>
							<br />
							SNS으로 공유해보세요
						</SNSTitle>

						<SNSSpaceLayout>
							<div>
								<ShareToKakao />
								<ShareToTwitter className='sns' />
								<ShareToFacebook className='sns' />
							</div>
						</SNSSpaceLayout>
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
