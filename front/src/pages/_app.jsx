import React, { Suspense } from 'react';
import Head from 'next/head';
//style
import AppLayout from 'src/component/AppLayout';
import { GlobalStyles } from 'src/styles/globalStyle';
//for error
import { ErrorBoundary } from 'react-error-boundary';
//for data
import { RecoilRoot } from 'recoil';
//for loading
import Loading from 'src/component/common/Loading';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<ErrorBoundary>
				<RecoilRoot>
					<Suspense faillback={<Loading />}>
						<AppLayout>
							<Component {...pageProps} />
						</AppLayout>
					</Suspense>
				</RecoilRoot>
			</ErrorBoundary>
		</>
	);
}

export default MyApp;

//<ErrorBoundary faillback={<div>Loading...</div>}>
