const Template_singleMuseum = (checkId, inputValue, router, setBotMode) => {
	const imgSrc = `https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${checkId}_image01.jpg`;
	const textInside = `${inputValue}`;
	return (
		<>
			<div className='msgFromAI'>{inputValue}을 찾으셨나요?</div>
			<div className='emptyBox'></div>
			<div
				className='singleOne'
				onClick={() => {
					router.push(`/detail/${checkId}`);
					setBotMode('off');
					document.querySelector('#AImodalOnBtn').style.display = 'block';
					document.querySelector('.logoTest').style.display = 'none';
				}}
			>
				<div className='imgBox'>
					<img src={imgSrc}></img>
					<p>{textInside}</p>
				</div>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Template_singleMuseum;
