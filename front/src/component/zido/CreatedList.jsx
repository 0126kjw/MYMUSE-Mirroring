export default function CreatedList({ pins, selectedMapState, hoverPin }) {
	return (
		<>
			{selectedMapState.mapKind == 'inner' && pins && pins.length > 0 && (
				<div className='pinListUps'>
					<ul>
						{pins.map((x) => {
							return (
								<div
									key={x._id}
									className={x._id != hoverPin ? 'basic' : 'borderRed'}
								>
									<li>
										<p>{x.name}</p>
										<p>{x.address}</p>
									</li>
								</div>
							);
						})}
					</ul>
				</div>
			)}

			{selectedMapState.mapKind == 'inner' && pins && pins.length == 0 && (
				<div className='guideText2'>
					<p>{selectedMapState.name}는 등록된 박물관이 없습니다.</p>
				</div>
			)}

			{selectedMapState.mapKind == 'inner' && (
				<div className='guideText'>
					<p>
						박물관 위치가 겹치는 경우<br></br> 지도에서 확인이 어려울 수 있습니다.
					</p>
				</div>
			)}

			{selectedMapState.mapKind == 'outer' && (
				<div className='guideText'>
					<p>박물관 목록에서 상세 페이지로 이동할 수 있습니다.</p>
				</div>
			)}
		</>
	);
}
