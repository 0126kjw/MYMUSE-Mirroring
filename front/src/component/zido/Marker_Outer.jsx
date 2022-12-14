import { Marker } from 'react-simple-maps';
export default function Marker_Outer({
	markers,
	selectedMapState,
	setIsMapFetching,
	setSelectedMapState,
}) {
	return (
		<>
			{selectedMapState.mapKind == 'outer'
				? markers.map(({ name, coordinates, markerOffset }) => (
						<Marker
							key={name}
							coordinates={coordinates}
							onClick={async () => {
								setIsMapFetching(true);
								setSelectedMapState({
									mapKind: 'inner',
									name: name + '구',
								});
							}}
						>
							<text
								textAnchor='middle'
								y={markerOffset}
								style={{
									fontFamily: 'system-ui',
									fontSize: '8',
									fontWeight: 'bold',
									cursor: 'pointer',
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
