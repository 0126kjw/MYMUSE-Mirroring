//for styled
import { css } from '@emotion/react';
import cssUnit from 'lib/cssUnit';
//components
import { Header, Footer, AiBot } from './index';

//styling
const AppContainer = css`
	background-color: ${cssUnit.backgroundColors.Black};
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
				<main>{children}</main>
				<AiBot />
				<Footer />
			</div>
		</>
	);
};

export default AppLayout;
