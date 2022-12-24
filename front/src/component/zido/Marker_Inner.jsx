import { Marker } from 'react-simple-maps';
import { IdBook } from 'src/data/idBook';
import { useRouter } from 'next/router';
import cssUnit from 'src/lib/cssUnit';

const Marker_Inner = ({ currentMap, pins, setTooltipName, setHoverPin }) => {
	const router = useRouter();
	const moveToDetail = (museName) => {
		let ID = '';
		IdBook.forEach((v) => {
			if (v.name == museName) {
				ID = v.id;
			}
		});
		router.push(`/detail/${ID}`);
	};

	return (
		<>
			{currentMap.mapKind == 'inner'
				? pins &&
				  pins.map(({ name, coordinates, _id }) => (
						<Marker
							key={_id}
							coordinates={coordinates}
							onClick={() => {
								moveToDetail(name);
							}}
							onMouseEnter={() => {
								setTooltipName(name);
								setHoverPin(_id);
							}}
							onMouseLeave={() => {
								setTooltipName('');
							}}
							style={{
								default: {
									fill: `${cssUnit.colors.RealGold}`,
								},
								hover: {
									fill: 'rgba(172, 232, 207, .9)',
									outline: 'white',
									stroke: 'pink',
									strokeWidth: 0.1,
									cursor: 'pointer',
								},
							}}
						>
							<circle
								r={5}
								fill={`${cssUnit.colors.RealGold}`}
								stroke='#fff'
								strokeWidth={1}
							/>
							<text
								textAnchor='middle'
								y='-2'
								style={{
									fontFamily: `${cssUnit.fontFamily.GowunBT}`,
									fontSize: '25',
									fontWeight: 'bold',
									cursor: 'pointer',
								}}
							></text>
						</Marker>
				  ))
				: null}
		</>
	);
};
export default Marker_Inner;
