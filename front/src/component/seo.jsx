import Head from 'next/head';
import { useEffect, uesState } from 'react';

const Seo = (title) => {
	const [pageTitle, setPageTitle] = useState();
	useEffect(() => {
		if (pageTitle) {
			setPageTitle(title);
		}
	}, [pageTitle, title]);

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='' content='' />
			<meta name='' content='' />
		</Head>
	);
};

export default Seo;
