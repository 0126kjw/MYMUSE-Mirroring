const ShareToTwitter = () => {
	const sendTwitter = () => {
		var sendText = 'myMuse에 오신 것을 환영합니다.'; // 전달할 텍스트
		var sendUrl = 'http://kdt-ai5-team09.elicecoding.com/'; // 전달할 URL
		window.open('https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl);
	};

	return (
		<img
			src='https://cdn-icons-png.flaticon.com/512/124/124021.png'
			onClick={sendTwitter}
			style={{
				width: '67px',
				borderRadius: '10px',
				cursor: 'pointer',
			}}
			title={'트위터로 로그인하여 공유하기'}
		></img>
	);
};
export default ShareToTwitter;
