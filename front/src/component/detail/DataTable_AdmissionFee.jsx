const DataTable_AdmissionFee = ({ adultFee, youthFee, childFee, isFree, feeUrl }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>요금정보</p>

			<div className='col-2'>
				<div className='rcol'>무료 입장여부</div>
				{isFree == true && <div>무료</div>}
				{isFree == false && <div>입장료 확인</div>}
			</div>

			<div className='col-2'>
				<div className='rcol-fee'>어른 관람료</div>
				<div>{adultFee === 0 ? '무료' : adultFee}</div>
			</div>
			<div className='col-2'>
				<div className='rcol-fee'>청소년 관람료</div>
				<div>{youthFee === 0 ? '무료' : youthFee}</div>
			</div>
			<div className='col-2'>
				<div className='rcol-fee'>어린이 관람료</div>
				<div>{childFee === 0 ? '무료' : childFee}</div>
			</div>
			<div className='col-2'>
				<div className='rcol'>요금 참조</div>
				<div>
					{feeUrl !== '-' && <a href={feeUrl}>{feeUrl}</a>}
					{feeUrl === '-' && <a href='javascirpt:void(0);'>정보없음</a>}
				</div>
			</div>
		</div>
	);
};

export default DataTable_AdmissionFee;
