//styling
import cssUnit from 'src/lib/cssUnit';
import { PageLayout, SubTitle } from 'src/styles/compoStyles/cardlistStyle';
import { ListSection } from 'src/styles/compoStyles/cardlistStyle';
//for page common section
import { Wrap, WrapTitle } from 'src/styles/common';
import TitleSection from 'src/component/common/TitleSection';
//to use in getServersideProps

//components where data fetching occured
import AllCardsList from 'src/component/cards/AllCardsList';
//for seo
import withGetServerSideProps from 'src/hocs/withServersideProps';

const Popular = () => {
	return (
		<>
			<PageLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={200}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>인기 유료 전시회</WrapTitle>
						<SubTitle>인터파크 티켓랭킹</SubTitle>
					</Wrap>
				</TitleSection>
				<ListSection color={cssUnit.backgroundColors.White} size={900} className={`page`}>
					<Wrap>
						<AllCardsList category={`exhibitions`} />
					</Wrap>
				</ListSection>
			</PageLayout>
		</>
	);
};

export default Popular;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	return {
		props: {},
	};
});
