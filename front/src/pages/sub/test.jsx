//Dummy Test Page
//styling
import { Section, Wrap, WrapTitle } from 'styles/common';
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
} from 'styles/pageStyles/mainStyle';
import TitleSection from 'component/common/TitleSection';

const Test = () => {
	return (
		<>
			<MainContainer>
				<TitleSection />
				<h1>테스트 화면</h1>
			</MainContainer>
		</>
	);
};

export default Test;
