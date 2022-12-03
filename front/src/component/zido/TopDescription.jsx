export default function TopDescription({ selectedMapState }) {
	return (
		<>
			{selectedMapState.mapKind == 'inner' && (
				<div className='subLocationName'>{selectedMapState.name}</div>
			)}
			{selectedMapState.mapKind == 'outer' && <div className='subLocationName'>서울시</div>}
		</>
	);
}
