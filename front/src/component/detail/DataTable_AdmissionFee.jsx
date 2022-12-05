const DataTable_AdmissionFee = ({ adultFee, youthFee, childFee, isFree, feeUrl }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>요금정보</p>

			<div className='col-2'>
				<div>무료 입장여부</div>
				{isFree == true && <div>무료</div>}
				{isFree == false && <div>입장료 확인</div>}
			</div>

			<div className='col-2'>
				<div>어른 관람료</div>
				<div>{adultFee}</div>
			</div>
			<div className='col-2'>
				<div>청소년 관람료</div>
				<div>{youthFee}</div>
			</div>
			<div className='col-2'>
				<div>어린이 관람료</div>
				<div>{childFee}</div>
			</div>
			<div className='col-2'>
				<div>참조</div>
				<div>
					<a href={feeUrl}>{feeUrl}</a>
				</div>
			</div>
		</div>
	);
};

export default DataTable_AdmissionFee;
