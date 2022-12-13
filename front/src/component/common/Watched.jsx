import { useEffect } from 'react';
import styled from '@emotion/styled';
import rightArrow from '../../../public/images/right-arrow.png';
import Image from 'next/legacy/image';
import cssUnit from 'src/lib/cssUnit';
import { IdBook } from 'src/data/idBook';
import { useRouter } from 'next/router';

const WatchedStyle = styled.div`
	position: fixed;
	width: 180px;
	right: 0px;
	top: 45vh;
	margin: 0px auto;

	background-color: aliceblue;
	border: 1px solid brown;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	z-index: 2;

	p {
		background-color: aliceblue;
		border-top: 1px solid brown;
		border-bottom: 1px solid brown;
		padding: 3px;
		margin: 0px;
		:hover {
			color: ${cssUnit.backgroundColors.White};
			background-color: ${cssUnit.backgroundColors.LightBlack};
			cursor: pointer;
		}
	}
	.watchedTitle {
		text-align: center;
		font-weight: bold;
		span {
			color: brown;
			cursor: pointer;
		}
	}
`;

const RightArrow = styled.div`
	padding: 0px;
	margin: 0px;
	position: fixed;
	right: 10px;
	top: 50vh;
	z-index: 2;
	background-color: beige;
	border-radius: 50%;
	border: solid 1px black;
	width: 25px;
	height: 25px;
`;

const Watched = ({ setIsWatchedOn }) => {
	const router = useRouter();
	const moveToDetail = (museName) => {
		let ID = '';
		IdBook.forEach((v) => {
			if (v.name == museName) {
				ID = v.id;
			}
		});
		router.push(`/detail/${ID}`);
	};

	let detail_list = null;
	if (typeof window !== 'undefined') {
		detail_list = JSON.parse(localStorage.getItem('watched'));
	}
	useEffect(() => {
		detail_list === null ? localStorage.setItem('watched', JSON.stringify([])) : null;
	}, []);

	return (
		<>
			<WatchedStyle className='watched_box'>
				<div className='watchedTitle'>
					최근 본 페이지{' '}
					<span
						onClick={() => {
							setIsWatchedOn(false);
						}}
					>
						&nbsp;✖
					</span>
				</div>
				{detail_list !== null
					? detail_list.map((a, i) => {
							return (
								<div
									key={i}
									onClick={() => {
										moveToDetail(detail_list[i]);
									}}
								>
									<p className='watched_list' style={{ marginTop: '10px' }}>
										{detail_list[i]}
									</p>
								</div>
							);
					  })
					: null}
			</WatchedStyle>
			{/* <RightArrow>
				<Image
					src={rightArrow}
					onClick={() => {
						setIsWatchedOn(false);
					}}
					alt='openWatched'
					width='25'
					height='25'
				/>
			</RightArrow> */}
		</>
	);
};
export default Watched;
