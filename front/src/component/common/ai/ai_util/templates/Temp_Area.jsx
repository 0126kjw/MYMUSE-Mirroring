const Temp_Area = (guide, ans, router, setBotMode, chatRoomWidth) => {
	const moveToDetail = (item) => {
		router.push(`/detail/${item.id}`);
		setBotMode('off');
		document.querySelector('#AImodalOnBtn').style.display = 'block';
		document.querySelector('.logoTest').style.display = 'none';
	};

	// 송파구 박물관
	// 종로구 박물관
	return (
		<>
			<div className='msgFromAI'>{guide}</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<div className='horListBox' style={{ width: `${chatRoomWidth - 150}px` }}>
					{ans.length > 0 &&
						ans.map((item, i) => (
							<div className='horList' key={item._id + Math.random()}>
								<div
									className='innerHorList'
									onClick={() => {
										moveToDetail(item);
									}}
								>
									<div className='imgBox'>
										<img
											src={`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${item.id}_image01.jpg`}
										/>
										<p>{item.name}</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<span className='tip'>
					<span className='tipspan'>TIP</span> : (PC) 반환받은 목록에 마우스를 두고 shift
					+ scroll시 우측으로 스크롤 할 수 있습니다.
				</span>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Temp_Area;
