const moveScrollPoint = () => {
	const loc = document.querySelector('.AIsec2');
	loc.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};

export default moveScrollPoint;
