import React, { Suspense } from 'react';
//style
import AppLayout from 'component/AppLayout';
import { GlobalStyles } from 'styles/globalStyle';
//for error
import { ErrorBoundary } from 'react-error-boundary';
//for data
import { RecoilRoot } from 'recoil';
//for loading
import Loading from 'component/common/Loading';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<ErrorBoundary>
				<Suspense faillback={<Loading />}>
					<RecoilRoot>
						<AppLayout>
							<Component {...pageProps} />
						</AppLayout>
					</RecoilRoot>
				</Suspense>
			</ErrorBoundary>
		</>
	);
}

export default MyApp;

//<ErrorBoundary faillback={<div>Loading...</div>}>
