export default function TopDescription({ selectedMapState }) {
	return (
		<>
			{selectedMapState.mapKind == 'inner' && (
				<div className='mapDescBox'>{selectedMapState.name}</div>
			)}
			{selectedMapState.mapKind == 'outer' && <div className='mapDescBox'>서울시</div>}
		</>
	);
}
