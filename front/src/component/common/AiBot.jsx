import AiBotLayout from 'src/styles/compoStyles/aibotStyle';
import { useState } from 'react';
import AIChatRoom from 'component/common/AIChatRoom';

const AiBot = () => {
	const [botMode, setBotMode] = useState('off');

	const openBot = () => {
		setBotMode('on');
	};

	return (
		<AiBotLayout>
			{botMode == 'off' ? (
				<div id='AImodalOnBtn' onClick={openBot}>
					AIBOT
				</div>
			) : (
				<AIChatRoom setBotMode={setBotMode} />
			)}
		</AiBotLayout>
	);
};

export default AiBot;
