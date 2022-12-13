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

			{/* <div className='col-2'>
				<div className='rcol'>박물관이름</div>
				<div>{name}</div>
			</div> */}
			<div className='col-2'>
				<div className='rcol'>홈페이지</div>
				<div>
					<a href={website}>{website}</a>
				</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>종류</div>
				<div>{category}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>담당기관</div>
				<div>{institution}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>구분</div>
				<div>{runby}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>전화번호</div>
				<div>
					<a herf={`tel:${contactInfo}`}>{contactInfo}</a>
				</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>도로명 주소</div>
				<div>{newAddress}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>지번 주소</div>
				<div>{oldAddress}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>편의시설</div>
				<div>{facilities}</div>
			</div>
			{/* <button>
				<a href={website}>홈페이지 바로가기</a>
			</button> */}
		</div>
	);
};

export default DataTable_Agency;
