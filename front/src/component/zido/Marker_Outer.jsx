import { Marker } from 'react-simple-maps';
import cssUnit from 'src/lib/cssUnit';
const Marker_Outer = ({ markers, currentMap, setIsMapFetching, setCurrentMap }) => {
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
									fontFamily: `${cssUnit.fontFamily.GowunBT}`,
									fontSize: '25',
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
};
export default Marker_Outer;
