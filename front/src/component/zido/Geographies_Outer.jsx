import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

export default function Geographies_Outer({
	currentMap,
	setCurrentMap,
	setIsMapFetching,
	mapData,
	outerMap,
}) {
	console.log('mapData', mapData);
	return (
		<>
			{currentMap.mapKind == 'outer' ? (
				<Geographies geography={outerMap}>
					{({ geographies }) =>
						geographies.map((geo) => {
							return (
								<Geography
									fill={'cornflowerblue'}
									stroke={'#2D2D2D'}
									strokeWidth={0.4}
									onClick={() => {
										setIsMapFetching(true);
										setCurrentMap({
											mapKind: 'inner',
											name: geo.properties.name,
										});
									}}
									key={geo.rsmKey}
									geography={geo}
									style={{
										default: {
											outline: 'none',
											fill: '#bd9b67',
											// fill: 'blue',
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
									}}
								/>
							);
						})
					}
				</Geographies>
			) : null}
		</>
	);
}
