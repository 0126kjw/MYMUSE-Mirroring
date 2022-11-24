import '../styles/globals.css';
import { Header, Footer, AiBot } from 'Component/common';
import { GlobalStyles } from 'styles/globalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GlobalStyles}
			<Header />
			<>
				<Component {...pageProps} />
			</>
			<Footer />
			<AiBot />
		</>
	);
}

export default MyApp;
