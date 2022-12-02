import AiBotLayout from 'src/styles/compoStyles/aibotStyle';
import { useState } from 'react';

const AiBot = () => {
	const [bot, setBot] = useState('off');

	const openBot = () => {
		setBot('on');
	};

	const closeBot = () => {
		setBot('off');
	};

	return (
		<AiBotLayout>
			{bot == 'off' ? (
				<div className='Aibot' onClick={openBot}>
					AI
				</div>
			) : (
				<>
					<div className='forIframe'>
						<iframe
							width='350'
							height='430'
							allow='microphone;'
							src='https://console.dialogflow.com/api-client/demo/embedded/28ff80e2-e5e3-420b-ab8d-8dfe73cc67f5'
						></iframe>
					</div>
					<button className='closeBotBtn' onClick={closeBot}>
						봇 종료 버튼
					</button>
				</>
			)}
		</AiBotLayout>
	);
};

export default AiBot;
