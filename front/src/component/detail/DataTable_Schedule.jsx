const DataTable_Schedule = ({ mon, tue, thu, wed, fri, sat, sun, offday, website }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>일정정보</p>
			<div className={mon === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>월</div>
				<div>{mon}</div>
			</div>
			<div className={thu === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>화</div>
				<div>{thu}</div>
			</div>
			<div className={wed === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>수</div>
				<div>{wed}</div>
			</div>
			<div className={tue === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>목</div>
				<div>{tue}</div>
			</div>
			<div className={fri === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>금</div>
				<div>{fri}</div>
			</div>
			<div className={sat === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>토</div>
				<div>{sat}</div>
			</div>
			<div className={sun === '휴관' ? 'close' : 'open'}>
				<div className='rcol'>일</div>
				<div>{sun}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>휴관정보</div>
				<div>{offday}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>주의사항</div>
				<div>
					자세한 사항은 <a href={website}>홈페이지</a>에서 확인하시기 바랍니다.
				</div>
			</div>
		</div>
	);
};

export default DataTable_Schedule;
