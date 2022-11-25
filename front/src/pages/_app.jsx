import '../styles/globals.css';
import AppLayout from 'component/common/AppLayout';
import { GlobalStyles } from 'styles/globalStyle';
import React from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<RecoilRoot>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</RecoilRoot>
		</>
	);
}

export default MyApp;
