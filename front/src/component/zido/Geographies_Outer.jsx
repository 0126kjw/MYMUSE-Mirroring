import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

export default function Geographies_Outer({
	selectedMapState,
	mapState,
	setSelectedMapState,
	setIsFetching,
}) {
	return (
		<>
			{selectedMapState.mapKind == 'outer' ? (
				<Geographies geography={mapState.map}>
					{({ geographies }) =>
						geographies.map((geo) => {
							return (
								<Geography
									fill={'cornflowerblue'}
									stroke={'#F5F5F5'}
									strokeWidth={mapState.isZoom ? 0 : 0.4}
									onClick={() => {
										setIsFetching(true);
										setSelectedMapState({
											mapKind: 'inner',
											name: geo.properties.name,
										});
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
			) : null}
		</>
	);
}
