import AIBotLayout from 'src/styles/compoStyles/aibotStyle';
import { useState, useEffect } from 'react';
import AIChatRoom from 'src/component/common/ai/AIChatRoom';
import Image from 'next/image';
import AiBotImg from '../../../../public/images/aibot.png';

const AiBot = () => {
	const [botMode, setBotMode] = useState('off');

	const openBot = () => {
		setBotMode('on');
		const ele1 = document.querySelector('#AImodalOnBtn');
		ele1.style.display = 'none';

		const ele2 = document.querySelector('.logoTest');
		ele2.style.display = 'block';
	};

	return (
		<AIBotLayout>
			<div id='AImodalOnBtn' onClick={openBot}>
				<Image src={AiBotImg} alt='enterImage' width='100' height='150'></Image>
			</div>
			<div className='logoTest'>
				<div className='position'></div>
				<AIChatRoom setBotMode={setBotMode} botMode={botMode} />
			</div>
		</AIBotLayout>
	);
};

export default AiBot;
