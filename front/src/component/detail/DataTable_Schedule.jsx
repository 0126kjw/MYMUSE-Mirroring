const DataTable_Schedule = ({ mon, tue, thu, wed, fri, sat, sun, offday }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>일정정보</p>
			<div className='col-2'>
				<div>월</div>
				<div>{mon}</div>
			</div>
			<div className='col-2'>
				<div>화</div>
				<div>{thu}</div>
			</div>
			<div className='col-2'>
				<div>수</div>
				<div>{wed}</div>
			</div>
			<div className='col-2'>
				<div>목</div>
				<div>{tue}</div>
			</div>
			<div className='col-2'>
				<div>금</div>
				<div>{fri}</div>
			</div>
			<div className='col-2'>
				<div>토</div>
				<div>{sat}</div>
			</div>
			<div className='col-2'>
				<div>일</div>
				<div>{sun}</div>
			</div>
			<div className='col-2'>
				<div>휴관정보</div>
				<div>{offday}</div>
			</div>
			<div className='col-2'>
				<div>주의사항</div>
				<div>자세한 사항은 페이지에서 확인하시기 바랍니다.</div>
			</div>
		</div>
	);
};

export default DataTable_Schedule;
