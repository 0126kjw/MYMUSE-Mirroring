const ShareToFacebook = () => {
	const sendFacebook = () => {
		var sendUrl = 'http://kdt-ai5-team09.elicecoding.com/'; // 전달할 URL
		window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
	};

	return (
		<div>
			<img
				src='https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200'
				onClick={sendFacebook}
				style={{
					width: '67px',
					borderRadius: '10px',
					cursor: 'pointer',
				}}
			></img>
		</div>
	);
};
export default ShareToFacebook;
