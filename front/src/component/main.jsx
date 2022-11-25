import {
	MainContainer,
	MainTitleContainer,
	Logosection,
} from 'styles/pageStyles/mainStyle';
import Image from 'next/image';

import { css } from '@emotion/react';
// component

import SearchBar from './SearchBar';
import Slider from './Slider';
const Section = css`
	min-width: 1200px;
	height: 900px;
`;

const Main = () => {
	return (
		<>
			<MainContainer>
				<MainTitleContainer>
					<Logosection>
						{/* <Image
							src='imgaes/siteLogo.png'
							alt='logo_title'
							layout='fill'
							objectFit='contain'
							unoptimized={true}
						/> */}
					</Logosection>
				</MainTitleContainer>
				<section
					css={css`
						${Section}
					`}
				>
					<Slider />
				</section>
				<section
					css={css`
						${Section}
					`}
				></section>
				<section
					css={css`
						${Section}
					`}
				></section>

				{/* <AiBot></AiBot> */}
			</MainContainer>
		</>
	);
};

export default Main;
