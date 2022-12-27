// 경운박물관에 주차장 있어?
const Temp_Others = (name, website) => {
	return (
		<>
			<div className='msgFromAI'>
				{name}에 대해 자세히 알아볼 수 있는 페이지를 보여드릴게요!
			</div>
			<div className='msgFromAI'>
				<a href={website}>
					{name} : {website}
				</a>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Temp_Others;
