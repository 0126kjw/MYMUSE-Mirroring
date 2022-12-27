// chatRoom 크기에 대응해 제어창, 입력창, 내부 목록값들 크기 조정
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
			selectedElements[i].style.width = `${chatRoomWidth - 150}px`;
		}
	}
};

export default elemSizeHandler;
