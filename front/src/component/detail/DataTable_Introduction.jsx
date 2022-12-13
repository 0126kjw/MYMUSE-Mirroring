const DataTable_Introduction = ({ description, name }) => {
	return (
		<div className='boxes'>
			<p className='subTitle'>{name} 소개</p>
			<div className='col-1'>{description}</div>
		</div>
	);
};

export default DataTable_Introduction;
