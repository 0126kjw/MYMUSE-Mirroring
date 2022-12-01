//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
// components
import SearchBar from 'component/SearchBar';
//for Seo
import SeoData from 'lib/seoData';
import Seo from 'component/Seo';

import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import Image from 'next/legacy/image';
import TitleSection from 'component/common/TitleSection';
import { SearchpageLayout } from 'styles/pageStyles/searchStyle';

const Search = () => {
	//seo Data
	const PageData = SeoData.Search;
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
		// getData();
	}, [bundleIdx]);

	return (
		<>
			<Seo title={PageData.title} description={PageData.description} ogUrl={PageData.ogUrl} />
			<SearchpageLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={50}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>박물관/전시관 검색</WrapTitle>
					</Wrap>
				</TitleSection>
				<SearchBar
					searchVal={searchVal}
					setSearchVal={setSearchVal}
					searchRes={searchRes}
					setSearchRes={setSearchRes}
				/>

				<div style={{ textAlign: 'center' }}>검색 결과 : {searchRes}</div>
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
		</>
	);
};

export default Search;
