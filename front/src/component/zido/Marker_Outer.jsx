import { Marker } from 'react-simple-maps';
export default function Marker_Outer({ markers, selectedMapState }) {
	return (
		<>
			{selectedMapState.mapKind == 'outer'
				? markers.map(({ name, coordinates, markerOffset }) => (
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
				  ))
				: null}
		</>
	);
}
