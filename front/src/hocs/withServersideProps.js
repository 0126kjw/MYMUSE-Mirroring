import Seo from 'src/component/Seo';
/**
 *
 * @param {
 * } context : getServerSideProps
 */
const withGetServerSideProps = (getServerSideProps) => {
	//console.log(context.resolvedUrl);
	//return context.resolvedUrl;
	return async (context) => {
		const pageUrl = context.resolvedUrl;

		console.log(pageUrl);
		return {
			props: context.resolvedUrl,
		};
	};
};

export default withGetServerSideProps();
