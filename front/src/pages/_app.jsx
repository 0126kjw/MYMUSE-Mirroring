//style
import AppLayout from 'component/AppLayout';
import { GlobalStyles } from 'styles/globalStyle';
//for error
import { ErrorBoundary } from 'react-error-boundary';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ErrorBoundary faillback={<div>Loading...</div>}>
				{GlobalStyles}
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</ErrorBoundary>
		</>
	);
}

export default MyApp;
