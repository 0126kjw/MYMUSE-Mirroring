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
	//console.log('compo?', Component);
	const { pagePath, pageTitle, pageDesc, item } = pageProps;
	return (
		<>
			{GlobalStyles}
			<RecoilRoot>
				<ErrorBoundary>
					<Suspense faillback={<Loading />}>
						<Seo pagePath={pagePath} pageTitle={pageTitle} pageDesc={pageDesc} />
						<AppLayout>
							<Component {...pageProps} item={item} />
						</AppLayout>
					</Suspense>
				</ErrorBoundary>
			</RecoilRoot>
		</>
	);
}

export default MyApp;
