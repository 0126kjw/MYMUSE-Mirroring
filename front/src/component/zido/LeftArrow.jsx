export default function CreatedList({
	selectedMapState,
	setMapState,
	setPins,
	setSelectedMapState,
	outerMap,
}) {
	return (
		<>
			{selectedMapState.mapKind == 'inner' && (
				<>
					<div
						className='leftArrow'
						onClick={() => {
							setSelectedMapState({
								mapKind: 'outer',
								name: '',
							});
							setMapState({
								zoom: 2,
								map: outerMap,
								center: [126.986, 37.561],
							});
							setPins((prev) => null);
						}}
					>
						⬅
					</div>
				</>
			)}
		</>
	);
}
