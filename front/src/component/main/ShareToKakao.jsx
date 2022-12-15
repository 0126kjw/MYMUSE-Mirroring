const ShareToKakao = () => {
	const onClick = () => {
		const { Kakao } = window;
		Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: 'MYMUSE',
				description: '한 곳에서 보는 온라인 AI 전시정보 팜플렛',
				imageUrl:
					'https://res.cloudinary.com/dtq075vja/image/upload/v1669879703/9gle/ogImage_uki29n.png',
				link: {
					mobileWebUrl: 'http://kdt-ai5-team09.elicecoding.com',
					webUrl: 'http://kdt-ai5-team09.elicecoding.com',
				},
			},
			social: {
				likeCount: 286,
				commentCount: 45,
				sharedCount: 845,
			},
			buttons: [
				{
					title: '웹으로 보기',
					link: {
						mobileWebUrl: 'http://kdt-ai5-team09.elicecoding.com',
						webUrl: 'http://kdt-ai5-team09.elicecoding.com',
					},
				},
			],
		});
	};
	return (
		<>
			<img
				src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
				alt='카카오톡 공유 보내기 버튼'
				onClick={onClick}
			/>
		</>
	);
};

export default ShareToKakao;
