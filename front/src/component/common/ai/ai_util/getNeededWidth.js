const getNeededWidth = (len, chatRoomWidth) => {
	// 엘리먼트 크기
	const listEles = len * 200;
	const listWhiteSpace = (len - 1) * 10;
	const frontBackWhiteSPace = 10;
	const listBoxWidth = listEles + listWhiteSpace + frontBackWhiteSPace;

	// 챗봇 크기
	const chatRoomWidthFix = chatRoomWidth - 150;

	// 더 작은 수치 적용
	return listBoxWidth >= chatRoomWidthFix ? chatRoomWidthFix : listBoxWidth;
};

export default getNeededWidth;

// 테스트
// 송파구 박물관
// 금천구 박물관
