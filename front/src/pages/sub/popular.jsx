//components
import PopularList from '../../component/PopularList';
//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useEffect } from 'react';

const PopularLayout = styled.div`
	width: auto;
	height: auto;

	margin: 0px auto;

	background-color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	main {
		text-align: center;
	}
`;

const Popular = () => {
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<PopularLayout>
			<Section color={cssUnit.backgroundColors.Black} size={100}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>인기 유료 전시회</WrapTitle>
				</Wrap>
			</Section>
			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<h1>개발중 입니다</h1>
					</UnderDevSection>
				</Wrap>
			</Section>
		</PopularLayout>
	);
};

export default Popular;
