//for styled
import { css } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';
//components
import { Header, Footer, AiBot, NavBarHBG } from './common/index';
import Watched from './common/Watched';
import { useState } from 'react';

//styling
const AppContainer = css`
	background-color: ${cssUnit.backgroundColors.Black};
	max-width: 1200px;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const AppLayout = ({ children }) => {
	const [isWatchedOn, setIsWatchedOn] = useState(false);

	return (
		<>
			<div
				css={css`
					${AppContainer}
				`}
			>
				<Header />
				<NavBarHBG />
				<main>{children}</main>
				<Footer />
				{isWatchedOn && <Watched />}
				{isWatchedOn && <TriangleButton />}
				<AiBot />
			</div>
		</>
	);
};

export default AppLayout;
