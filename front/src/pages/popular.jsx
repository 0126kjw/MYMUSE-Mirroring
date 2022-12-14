//styling
import cssUnit from 'src/lib/cssUnit';
import { PageLayout, SubTitle } from 'src/styles/compoStyles/cardlistStyle';
import { ListSection } from 'src/styles/compoStyles/cardlistStyle';
//for page common section
import { Wrap, WrapTitle } from 'src/styles/common';
import TitleSection from 'src/component/common/TitleSection';
import { PopWrapTitle } from 'src/styles/pageStyles/popularStyle';
//to use in getServersideProps

//components where data fetching occured
import AllCardsList from 'src/component/cards/AllCardsList';
//for seo
import withGetServerSideProps from 'src/hocs/withServersideProps';

import { useRecoilState, useRecoilValue } from 'recoil';
import currentMapState from 'src/state/currentMap';
import { useEffect } from 'react';

const Popular = () => {
	// 지도 outer 상태로 지정
	const [mapState, setMapState] = useRecoilState(currentMapState);
	useEffect(() => {
		setMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<>
			<PageLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={200}>
					<Wrap>
						<PopWrapTitle color={cssUnit.colors.White}>
							<li>인기 유료 전시회</li>
						</PopWrapTitle>
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
