//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
// components
import SearchBar from '../../component/SearchBar';

import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useState, useEffect } from 'react';
import axios from '../../../node_modules/axios/index';
import Image from 'next/legacy/image';

const SearchpageLayout = styled.div`
	background-color: ${cssUnit.colors.White};

	margin: 0px auto;

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	.subTitle {
		padding-top: 50px;
	}

	.allLists {
		width: 1000px;
		background-color: gray;

		display: grid;
		grid-template-columns: repeat(3, 1fr);

		margin: 0px auto;
		margin-top: 50px;

		row-gap: 50px;
		column-gap: 10px;
		padding: 45px;
		padding-top: 100px;
		border: 10px solid gray;

		li {
			width: 300px;
			height: 450px;
			list-style: none;
			cursor: default;

			.eachImg {
				width: 290px;
				background-color: #1e88e5;
				background-color: #82b1ff;
				background-color: #448aff;
				background-color: #42a5f5;

				position: relative;
				margin: 0 auto;
				padding: 0px;
				height: 210px;
				cursor: pointer;
				border: solid 5px #4d4d4d;
			}

			.textSection {
				position: absolute;
				background-color: aliceblue;
				width: 290px;
				height: 195px;
				font-size: 18px;
				z-index: 99;
				line-height: 22px;
				border-left: solid 5px #4d4d4d;
				border-right: solid 5px #4d4d4d;
				border-bottom: solid 5px #4d4d4d;

				.div1 {
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom: solid 2px dimgray;
					border-top: solid 2px dimgray;
					height: 75px;
				}
				.div2 {
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom: solid 2px dimgray;
					border-top: solid 2px dimgray;
					height: 40px;
				}
				.div3 {
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom: solid 2px dimgray;
					border-top: solid 2px dimgray;
					height: 70px;
				}
				.sub {
				}
			}
		}
	}
`;

const Search = () => {
	// 지도 관련 상태처리
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	// 검색어 입력 처리
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState('');

	// 검색결과
	const [list, setList] = useState([]);

	// 검색어 없을 때 전체 박물관
	const [bundleIdx, setBundleIdx] = useState(1);
	const getData = async () => {
		try {
			const res = await axios.get(
				`https://qrcavwxubm.us16.qoddiapp.com/museums?page=${bundleIdx}`,
			);
			setList((prev) => [...prev, ...res.data]);
		} catch {
			console.log('전체 전시관 데이터를 가져오는 과정에서 에러 발생');
		}
	};
	const getMoreList = () => {
		setBundleIdx((prev) => prev + 1);
	};
	useEffect(() => {
		getData();
	}, [bundleIdx]);

	return (
		<SearchpageLayout>
			<Section color={cssUnit.backgroundColors.Black} size={50}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>박물관/전시관 검색</WrapTitle>
					<SearchBar
						searchVal={searchVal}
						setSearchVal={setSearchVal}
						searchRes={searchRes}
						setSearchRes={setSearchRes}
					/>
				</Wrap>
			</Section>

			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<div className='subTitle'>subTitle</div>
						<ul className='allLists'>
							{list &&
								list.map((x, i) => {
									return (
										<li key={x._id}>
											<a target='_blank' href={x.href}>
												<div className='eachImg'>
													<Image
														src={x.imgSrc}
														alt='logo'
														width={180}
														height={210}
														unoptimized={true}
														style={{
															objectFit: 'cover',
															layout: 'fill',
														}}
													></Image>
												</div>
											</a>
											<div className='textSection'>
												<div className='div1'>
													<div className='sub'>{x.facility_name}</div>
												</div>
												<div className='div2'>
													<div className='sub'>{x.office_phone}</div>
												</div>
												<div className='div3'>
													<div className='sub'>{x.land_address}</div>
												</div>
											</div>
										</li>
									);
								})}
						</ul>
						<button onClick={getMoreList}>더 불러오기</button>
					</UnderDevSection>
				</Wrap>
			</Section>
		</SearchpageLayout>
	);
};

export default Search;
