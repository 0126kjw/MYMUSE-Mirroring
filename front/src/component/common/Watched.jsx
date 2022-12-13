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
	let detail_list = JSON.parse(localStorage.getItem('watched'));

	useEffect(() => {
		detail_list === null ? localStorage.setItem('watched', JSON.stringify([])) : null;
	}, []);

	return (
		<div
			className='watched_box'
			style={{ position: 'fixed', top: '0', width: '180px', right: '0px', top: '25%' }}
		>
			<p>최근 본 페이지</p>

			{detail_list !== null
				? detail_list.map((a, i) => {
						return (
							<div>
								<p className='watched_list' style={{ marginTop: '10px' }}>
									{detail_list[i]}
								</p>
							</div>
						);
				  })
				: null}
		</div>
	);
};
export default Watched;
