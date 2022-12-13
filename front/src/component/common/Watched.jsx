import { useEffect } from 'react';
import styled from '@emotion/styled';

const WatchedStyle = styled.div`
	background-color: white;
	border: 1px solid brown;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	p {
		border: 1px solid brown;
		padding: 3px;
		margin: 0px;
		:hover {
			color: red;
			background-color: beige;
			cursor: pointer;
		}
	}
`;

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

	let detail_list = null;
	if (typeof window !== 'undefined') {
		detail_list = JSON.parse(localStorage.getItem('watched'));
	}
	useEffect(() => {
		detail_list === null ? localStorage.setItem('watched', JSON.stringify([])) : null;
	}, []);

	return (
		<WatchedStyle
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
		</WatchedStyle>
	);
};
export default Watched;
