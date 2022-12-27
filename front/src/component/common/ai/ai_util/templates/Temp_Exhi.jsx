import getNeededWidth from '../getNeededWidth';
const Temp_Exhi = (guide, ans, chatRoomWidth) => {
	const len = ans.length;
	return (
		<>
			<div className='msgFromAI'>{guide}</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<div
					className='horListBox'
					style={{ width: `${getNeededWidth(len, chatRoomWidth)}px` }}
				>
					{ans.length > 0 &&
						ans.map((item, i) => (
							<div className='horList' key={item._id + Math.random()}>
								<div className='innerHorList'>
									<div className='imgBox'>
										<a
											target='_blank'
											href={`https://tickets.interpark.com/goods/${item.href}`}
										>
											<img src={item.imgSrc} />
											<p>{item.title}</p>
										</a>
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
export default Temp_Exhi;
