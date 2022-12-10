const DataTable_Agency = ({
	_id,
	name,
	website,
	category,
	contactInfo,
	facilities,
	newAddress,
	oldAddress,
	runby,
	institution,
}) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>기관정보</p>
			<div className='col-2'>
				<div>박물관이름</div>
				<div>{name}</div>
			</div>
			<div className='col-2'>
				<div>url 링크</div>
				<div>
					<a href={website}>{website}</a>
				</div>
			</div>
			<div className='col-2'>
				<div>category</div>
				<div>{category}</div>
			</div>
			<div className='col-2'>
				<div>담당기관</div>
				<div>{institution}</div>
			</div>
			<div className='col-2'>
				<div>구분</div>
				<div>{runby}</div>
			</div>
			<div className='col-2'>
				<div>전화번호</div>
				<div>{contactInfo}</div>
			</div>
			<div className='col-2'>
				<div>도로명 주소</div>
				<div>{newAddress}</div>
			</div>
			<div className='col-2'>
				<div>지번 주소</div>
				<div>{oldAddress}</div>
			</div>
			<div className='col-2'>
				<div>편의시설</div>
				<div>{facilities}</div>
			</div>
		</div>
	);
};

export default DataTable_Agency;
