// library
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

// style
import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

// data
import outerMap from 'src/data/seoul.json';
import { markers } from 'src/data/basicMarkers';

// state
import IsMapFetchingState from 'src/state/isMapFetching';
import SelectedMapState from 'src/state/currentMap';

export const MainZidoLayout = styled.div`
	background-color: ${cssUnit.backgroundColors.Gray};
`;

export default function SeoulZido() {
	const router = useRouter();

	const setSelectedMapState = useSetRecoilState(SelectedMapState);
	const setIsMapFetching = useSetRecoilState(IsMapFetchingState);

	return (
		<div>
			<MainZidoLayout>
				<ComposableMap
					projection='geoMercator'
					// projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
					projectionConfig={{
						center: [126.986, 37.57],
						scale: 100000,
					}}
					data-tip=''
				>
					<Geographies geography={outerMap}>
						{({ geographies }) =>
							geographies.map((geo) => {
								return (
									<Geography
										fill={cssUnit.backgroundColors.DeepBlack}
										stroke={'white'}
										strokeWidth={0.4}
										onClick={async () => {
											setIsMapFetching(true);
											setSelectedMapState({
												mapKind: 'inner',
												name: geo.properties.name,
											});
											await router.push('/map');
										}}
										key={geo.rsmKey}
										geography={geo}
										style={{
											default: {
												outline: 'none',
												fill: '#997A4C',
											},
											hover: {
												fill: '#D9D9D9',
												outline: 'none',
												cursor: 'pointer',
											},
											pressed: {
												fill: 'fff',
												outline: '#333',
											},
											zIndex: '2',
										}}
									/>
								);
							})
						}
					</Geographies>

					{markers.map(({ name, coordinates, markerOffset }) => (
						<Marker
							key={name}
							coordinates={coordinates}
							onClick={async () => {
								setIsMapFetching(true);
								setSelectedMapState({
									mapKind: 'inner',
									name: name + '구',
								});
								await router.push('/map');
							}}
						>
							<text
								textAnchor='middle'
								y={markerOffset}
								style={{
									fontFamily: `${cssUnit.fontFamily.GowunBT}`,
									fontSize: '21',
									fontWeight: 'bold',
									cursor: 'pointer',
								}}
							>
								{name}
							</text>
						</Marker>
					))}
				</ComposableMap>
			</MainZidoLayout>
		</div>
	);
}
