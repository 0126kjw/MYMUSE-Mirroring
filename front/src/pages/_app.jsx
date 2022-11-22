import '../styles/globals.css'
import { Header, Footer, AiBot } from 'Component/common'
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<>
				<Component {...pageProps} />
			</>
			<Footer />
			<AiBot />
		</>
	)
}

export default MyApp
