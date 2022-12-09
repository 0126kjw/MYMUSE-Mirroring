import React, { Suspense } from 'react';
//style
import AppLayout from 'src/component/AppLayout';
import { GlobalStyles } from 'src/styles/globalStyle';
//for error
import { ErrorBoundary } from 'react-error-boundary';
//for data
import { RecoilRoot } from 'recoil';
//for loading
import Loading from 'src/component/common/Loading';
//for seo
import Seo from 'src/component/Seo';

function MyApp({ Component, pageProps }) {
	//console.log('페이지프롭스?', pageProps);
	const { pagePath, pageTitle, pageDosc } = pageProps;
	return (
		<>
			{GlobalStyles}
			<ErrorBoundary>
				<Seo pagePath={pagePath} pageTitle={pageTitle} pageDosc={pageDosc} />
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
