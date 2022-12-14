import { Marker } from 'react-simple-maps';
export default function Marker_Outer({ markers, currentMap, setIsMapFetching, setCurrentMap }) {
	return (
		<>
			{currentMap.mapKind == 'outer'
				? markers.map(({ name, coordinates, markerOffset }) => (
						<Marker
							key={name}
							coordinates={coordinates}
							onClick={async () => {
								setIsMapFetching(true);
								setCurrentMap({
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
									fontSize: '18',
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
