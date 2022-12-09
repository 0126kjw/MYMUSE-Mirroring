import { useEffect } from 'react';

const Watched = () => {
	// useEffect(() => {
	// 	let watched = localStorage.getItem('data');

	// 	if (watched == null) {
	// 		localStorage.setItem('data', item.name);
	// 	} else {
	// 		watched += '-' + item.name;
	// 		localStorage.setItem('data', watched);
	// 	}
	// }, []);

	useEffect(() => {
		let arr = localStorage.getItem('watched');
		if (arr == null) {
			arr = [];
		} else {
			arr = JSON.parse(arr);
		}
		arr.push(item.name);
		arr = new Set(arr);
		arr = [...arr];
		localStorage.setItem('watched', JSON.stringify(arr));
	});
	return <></>;
};
export default Watched;
