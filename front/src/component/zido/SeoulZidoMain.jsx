// library
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// etc
import SelectedMapState from 'state/selectedMap';
import cssUnit from 'lib/cssUnit';
import styled from '@emotion/styled';

// data
import outerMap from 'data/seoul.json';
import { markers } from 'data/basicMarkers';

export const MainZidoLayout = styled.div`
	background-color: ${cssUnit.backgroundColors.Gray};
`;

export default function SeoulZido() {
	const router = useRouter();

	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);

	const [mapState, setMapState] = useState({
		map: outerMap,
		zoom: 2.2,
		center: [126.986, 37.57],
	});

	return (
		<div>
			<MainZidoLayout>
				<ComposableMap
					projection='geoMercator'
					projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
					data-tip=''
				>
					<ZoomableGroup center={[126.986, 37.57]} zoom={2.2} minZoom={2.2} maxZoom={2.2}>
						<Geographies geography={outerMap}>
							{({ geographies }) =>
								geographies.map((geo) => {
									return (
										<Geography
											fill={'cornflowerblue'}
											stroke={'#F5F5F5'}
											strokeWidth={mapState.isZoom ? 0 : 0.4}
											onClick={async () => {
												if (router.pathname == '/') {
													setSelectedMapState({
														mapKind: 'inner',
														name: geo.properties.name,
													});
													await router.push('/sub/map');
												}
											}}
											key={geo.rsmKey}
											geography={geo}
											style={{
												default: {
													outline: 'none',
												},
												hover: {
													fill: 'chartreuse',
													outline: 'none',
													cursor: 'pointer',
												},
												pressed: {
													fill: 'fff',
													outline: '#333',
												},
											}}
										/>
									);
								})
							}
						</Geographies>

						{markers.map(({ name, coordinates, markerOffset }) => (
							<Marker key={name} coordinates={coordinates}>
								<text
									textAnchor='middle'
									y={markerOffset}
									style={{
										fontFamily: 'system-ui',
										fontSize: '8',
										fontWeight: 'bold',
										cursor: 'default',
									}}
								>
									{name}
								</text>
							</Marker>
						))}
					</ZoomableGroup>
				</ComposableMap>
			</MainZidoLayout>
		</div>
	);
}
