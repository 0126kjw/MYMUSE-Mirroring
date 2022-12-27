import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
import cssUnit from 'src/lib/cssUnit';
import { IdBook } from 'src/data/idBook';
import { useRouter } from 'next/router';
import goToDetailPage from 'src/utils/goToDetailPage';

const WatchedStyle = styled.div`
	position: fixed;
	width: 180px;
	right: 0px;
	top: 45vh;
	margin: 0px auto;

	background-color: ${cssUnit.colors.White};
	border: 2px solid ${cssUnit.colors.DarkGold};
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	z-index: 2;

	font-family: ${cssUnit.fontFamily.NotoKR_G};

	p {
		background-color: ${cssUnit.colors.White};
		border-top: 1px solid ${cssUnit.colors.DarkGold};
		border-bottom: 1px solid ${cssUnit.colors.DarkGold};
		padding: 3px;
		margin: 0px;

		font-family: ${cssUnit.fontFamily.Hahmlet};

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
			color: ${cssUnit.colors.DarkGold};
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
	const [detailList, setDetailList] = useState(
		localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
	);

	useEffect(() => {
		const nowPath = router.asPath;
		const museumIndex = nowPath.split('detail/')[1]
			? Number(nowPath.split('detail/')[1])
			: null;
		if (museumIndex && 1 <= museumIndex && museumIndex <= 127) {
			changeDetailList();
		}
		// console.log(nowPath);
	}, [router.asPath]);

	// let detail_list = null;
	// if (typeof window !== 'undefined') {
	//     detail_list = JSON.parse(localStorage.getItem('watched'));
	// }

	const changeDetailList = () => {
		if (typeof window === 'undefined') return;
		if (!localStorage.getItem('watched')) return;
		const savedDetailList = JSON.parse(localStorage.getItem('watched'));
		setDetailList(savedDetailList);
	};

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
				{detailList !== null
					? detailList.map((a, i) => {
							return (
								<div
									key={i}
									onClick={() => {
										goToDetailPage(detailList[i], router);
									}}
								>
									<p className='watched_list' style={{ marginTop: '10px' }}>
										{detailList[i]}
									</p>
								</div>
							);
					  })
					: null}
			</WatchedStyle>
		</>
	);
};
export default Watched;
