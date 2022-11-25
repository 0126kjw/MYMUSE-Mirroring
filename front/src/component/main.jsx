import {
	MainContainer,
	MainTitleContainer,
	Logosection,
} from 'styles/pageStyles/mainStyle';
import Image from 'next/image';
// component

import SearchBar from './SearchBar';
import Slider from './Slider';

const Main = () => {
	return (
		<>
			<MainContainer>
				<MainTitleContainer>
					<Logosection>
						<Image
							src='imgaes/siteLogo.png'
							alt='logo_title'
							layout='fill'
							objectFit='contain'
							unoptimized={true}
						/>
					</Logosection>
				</MainTitleContainer>
				<Slider></Slider>
				{/* <AiBot></AiBot> */}
			</MainContainer>
		</>
	);
};

export default Main;
