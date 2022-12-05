import AIBotLayout from 'src/styles/compoStyles/aibotStyle';
import { useState, useEffect } from 'react';
import AIChatRoom from 'src/component/common/AIChatRoom';

const AiBot = () => {
	const [botMode, setBotMode] = useState('off');

	const openBot = () => {
		setBotMode('on');
	};
	useEffect(() => {
		if (botMode == 'off') {
			const ele = document.querySelector('#AImodalOnBtn');
			ele.style.right = '30px';
			ele.style.bottom = '10px';
			ele.style.width = '100px';
		}
	}, [botMode]);

	return (
		<AIBotLayout>
			{botMode == 'off' ? (
				<div id='AImodalOnBtn' onClick={openBot}>
					AIBOT
				</div>
			) : (
				<div className='logoTest'>
					<div className='position'></div>
					<AIChatRoom setBotMode={setBotMode} botMode={botMode} />
				</div>
			)}
		</AIBotLayout>
	);
};

export default AiBot;
