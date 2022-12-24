const DataTable_Introduction = ({ description, category }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>{category} 소개</p>
			<div className='col-1'>{description}</div>
		</div>
	);
};

export default DataTable_Introduction;
