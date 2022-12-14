import { Geographies, Geography } from 'react-simple-maps';

export default function Geographies_Outer({ mapData, currentMap }) {
	return (
		<>
			{currentMap.mapKind == 'inner' ? (
				<Geographies geography={mapData}>
					{({ geographies }) =>
						geographies.map((geo) => {
							return (
								<Geography
									// fill={'cornflowerblue'}
									stroke={'#2D2D2D'}
									strokeWidth={0.7}
									key={geo.rsmKey}
									geography={geo}
									style={{
										default: {
											outline: 'none',
											fill: '#c09f6e',
										},
										hover: {
											fill: '#c09f6e',
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
