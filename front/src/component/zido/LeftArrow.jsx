import cssUnit from 'src/lib/cssUnit';

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
						style={{
							cursor: 'pointer',
							fontSize: '20px',
							fontFamily: `${cssUnit.fontFamily.NotoKR_G}`,
						}}
					>
						뒤로가기
					</div>
				</>
			)}
		</>
	);
}
