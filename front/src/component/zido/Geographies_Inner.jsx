import { Geographies, Geography } from 'react-simple-maps';

export default function Geographies_Outer({ selectedMapState, mapState }) {
	return (
		<>
			{selectedMapState.mapKind == 'inner' ? (
				<Geographies geography={mapState.map}>
					{({ geographies }) =>
						geographies.map((geo) => {
							return (
								<Geography
									fill={'cornflowerblue'}
									stroke={'#F5F5F5'}
									strokeWidth={mapState.isZoom ? 0 : 0.4}
									key={geo.rsmKey}
									geography={geo}
									style={{
										default: {
											outline: 'none',
										},
										hover: {
											outline: 'none',
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
