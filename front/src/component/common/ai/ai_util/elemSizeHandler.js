// chatRoom 크기에 대응해 제어창, 입력창, 내부 목록 크기 조정
// 내부 목록 : 기간별 전시회, 지역별 박물관 질문에 대한 리턴값

import getNeededWidth from './getNeededWidth';

const elemSizeHandler = (chatRoomHeight, chatRoomWidth) => {
	// modalTopSection
	const modalTopSection = document.querySelector('.modalTopSection');
	modalTopSection.style.bottom = `${chatRoomHeight + 95}px`;
	modalTopSection.style.width = `${chatRoomWidth}px`;

	// formDiv
	const formDiv = document.querySelector('.formDiv');
	formDiv.style.width = `${chatRoomWidth}px`;

	// horListBox;
	if (document.querySelector('.horListBox') !== null) {
		const selectedElements = document.querySelectorAll('.horListBox');

		for (let i = 0; i < selectedElements.length; i++) {
			const len = selectedElements[i].children.length;
			const val = getNeededWidth(len, chatRoomWidth);
			selectedElements[i].style.width = `${val}px`;
		}
	}
};

export default elemSizeHandler;
