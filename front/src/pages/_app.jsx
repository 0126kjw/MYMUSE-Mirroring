//style
import AppLayout from 'component/AppLayout';
import { GlobalStyles } from 'styles/globalStyle';
//for error
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<ErrorBoundary faillback={<div>Loading...</div>}>
				<RecoilRoot>
					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</RecoilRoot>
			</ErrorBoundary>
		</>
	);
}

export default MyApp;
