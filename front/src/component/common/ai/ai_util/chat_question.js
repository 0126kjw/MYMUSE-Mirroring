const chat_question = (AIsec2, inputValue) => {
	const humanMsg = document.createElement('div');
	humanMsg.classList.add('msgFromHuman');
	humanMsg.innerText = inputValue;
	AIsec2.appendChild(humanMsg);
};

export default chat_question;
