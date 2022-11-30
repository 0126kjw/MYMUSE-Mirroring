//for styled
import { css } from '@emotion/react';
import cssUnit from 'lib/cssUnit';
//components
import { Header, Footer, AiBot, NavBarHBG } from './common/index';

//styling
const AppContainer = css`
	background-color: ${cssUnit.backgroundColors.Black};
	max-width: 1200px;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const AppLayout = ({ children }) => {
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
				<AiBot />
				<Footer />
			</div>
		</>
	);
};

export default AppLayout;
