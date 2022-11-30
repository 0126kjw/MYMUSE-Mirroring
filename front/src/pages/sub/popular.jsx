//components
import PopularList from '../../component/PopularList';
//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for Seo
import SeoData from 'lib/seoData';
import Seo from 'component/Seo';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import TitleSection from 'component/common/TitleSection';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import SelectedMapState from 'state/selectedMap';
import Image from 'next/legacy/image';
import axios from '../../../node_modules/axios/index';

const PopularLayout = styled.div`
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

const Popular = () => {
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	const [list, setList] = useState([]);
	const [bundleIdx, setBundleIdx] = useState(1);
	//seo data
	const PageData = SeoData.Popular;

	const getData = async () => {
		try {
			const res = await axios.get(
				`https://qrcavwxubm.us16.qoddiapp.com/exhibitions?page=${bundleIdx}`,
			);
			setList((prev) => [...prev, ...res.data]);
		} catch {
			console.log('인기 전시회 데이터를 가져오는 과정에서 에러 발생');
		}
	};

	const getMoreList = () => {
		setBundleIdx((prev) => prev + 1);
	};

	useEffect(() => {
		getData();
	}, [bundleIdx]);

	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<>
			<Seo title={PageData.title} description={PageData.description} ogUrl={PageData.ogUrl} />
			<PopularLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={100}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>인기 유료 전시회</WrapTitle>
					</Wrap>
				</TitleSection>
				<Section color={cssUnit.backgroundColors.White} size={900}>
					<Wrap>
						<UnderDevSection>
							<div className='subTitle'>인터파크 티켓랭킹</div>
							<ul className='allLists'>
								{list &&
									list.map((x, i) => {
										return (
											<li key={x._id}>
												<a
													target='_blank'
													href={
														'https://tickets.interpark.com/goods/' +
														x.href
													}
												>
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
														<div className='sub'>{x.title}</div>
													</div>
													<div className='div2'>
														<div className='sub'>
															{x.period[0]} ~ {x.period[1]}
														</div>
													</div>
													<div className='div3'>
														<div className='sub'>{x.place}</div>
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
			</PopularLayout>
		</>
	);
};

export default Popular;
