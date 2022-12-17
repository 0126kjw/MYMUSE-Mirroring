import { IdBook } from 'src/data/idBook';
import { useRouter } from 'next/router';

const CreatedList = ({ pins, currentMap, hoverPin }) => {
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
			{currentMap.mapKind == 'inner' && pins && pins.length > 0 && (
				<div className='pinListUps'>
					{currentMap.mapKind == 'inner' && (
						<div className='guideText3'>
							<p>박물관 위치가 겹치는 경우 지도에서 확인이 어려울 수 있습니다.</p>
						</div>
					)}

					<ul>
						{pins.map((x) => {
							return (
								<div
									key={x._id}
									className={x._id != hoverPin ? 'basic' : 'borderRed'}
									onClick={() => {
										moveToDetail(x.name);
									}}
								>
									<div>
										<h1>{x.name}</h1>
										<p>{x.address}</p>
									</div>
								</div>
							);
						})}
					</ul>
				</div>
			)}

			{/* {currentMap.mapKind == 'inner' && (
				<div className='guideText'>
					<p>
						박물관 위치가 겹치는 경우<br></br> 지도에서 확인이 어려울 수 있습니다.
					</p>
				</div>
			)} */}

			{currentMap.mapKind == 'inner' && pins && pins.length == 0 && (
				<div className='guideText2'>
					<p>{currentMap.name}는 등록된 박물관이 없습니다.</p>
				</div>
			)}

			{currentMap.mapKind == 'outer' && (
				<div className='guideText'>
					<p>박물관 목록에서 상세 페이지로 이동할 수 있습니다.</p>
				</div>
			)}
		</>
	);
};
export default CreatedList;
