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

MyApp.getInitialProps = async (context) => {
	const { ctx, Component } = context;

	let pageProps = {};

	//console.log(ctx);

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps };
};

export default MyApp;

//<ErrorBoundary faillback={<div>Loading...</div>}>
