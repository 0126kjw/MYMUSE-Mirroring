import { Geographies, Geography } from 'react-simple-maps';
import cssUnit from 'src/lib/cssUnit';
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
									stroke={`${cssUnit.colors.LightGray}`}
									strokeWidth={0.6}
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
