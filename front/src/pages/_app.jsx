import '../styles/globals.css';
import AppLayout from 'component/AppLayout';
import { GlobalStyles } from 'styles/globalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
}

export default MyApp;
