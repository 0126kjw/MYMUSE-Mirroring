export default function LeftArrow({ currentMap, setPins, setCurrentMap }) {
	return (
		<>
			{currentMap.mapKind == 'inner' && (
				<>
					<div
						className='mapDescBox'
						onClick={() => {
							setCurrentMap({
								mapKind: 'outer',
								name: '',
							});
							setPins((prev) => null);
						}}
						style={{ cursor: 'pointer', fontSize: '30px' }}
					>
						⬅
					</div>
				</>
			)}
		</>
	);
}
