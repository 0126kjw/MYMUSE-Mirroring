//for styled
import { css } from '@emotion/react';
import cssUnit from 'src/lib/cssUnit';
//components
import { Header, Footer, AiBot, NavBarHBG } from './common/index';

import { useState } from 'react';

import Watched from './common/Watched';
import WatchedOnButton from './common/WatchedOnButton';

//styling
const AppContainer = css`
	background-color: ${cssUnit.backgroundColors.Black};
	max-width: 1200px;
	overflow: hidden;
	width: 100%;
	height: 100%;

	margin: 0;
	padding: 0;
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
				{isWatchedOn && <Watched setIsWatchedOn={setIsWatchedOn} />}
				{!isWatchedOn && <WatchedOnButton setIsWatchedOn={setIsWatchedOn} />}
				<AiBot />
			</div>
		</>
	);
};

export default AppLayout;
