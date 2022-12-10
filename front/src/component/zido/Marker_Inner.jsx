import { Marker } from 'react-simple-maps';
import { IdBook } from 'src/data/idBook';
import { useRouter } from 'next/router';

export default function Marker_Inner({ selectedMapState, pins, setTooltipName, setHoverPin }) {
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
			{selectedMapState.mapKind == 'inner'
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
									fill: 'rgba(172, 232, 207, .9)',
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
							<circle r={1} fill='#F00' stroke='#fff' strokeWidth={0.2} />
							<text
								textAnchor='middle'
								y='-2'
								style={{
									fontFamily: 'system-ui',
									fontSize: '1.6',
									fontWeight: 'bold',
									cursor: 'pointer',
								}}
							></text>
						</Marker>
				  ))
				: null}
		</>
	);
}
