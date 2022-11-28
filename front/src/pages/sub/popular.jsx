//components
import PopularList from '../../component/PopularList';
//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useState, useEffect } from 'react';
import InterParkDummy from 'data/dummyData/InterParkDummy';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

const PopularLayout = styled.div`
	background-color: ${cssUnit.colors.White};
	width: 1200px;
	margin: 0px auto;
	padding: 0px;

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	.allLists {
		background-color: green;
		width: 1200px;

		display: grid;
		grid-template-columns: repeat(6, 1fr);

		// margin: 0px auto;
		margin-top: 120px;

		row-gap: 5px;
		column-gap: 5px;
		padding: 5px;

		li {
			width: 190px;
			height: 400px;
			background-color: aliceblue;
			list-style: none;
			border: 5px solid black;

			.eachImg {
				background-color: gray;
				position: relative;
				margin: 0 auto;
				padding: 0px;
				height: 200px;
				cursor: pointer;
			}

			.textSection {
				position: absolute;

				background-color: beige;
				width: 200px;
				height: 200px;
				font-size: 18px;
				z-index: 99;
				line-height: 22px;
				p {
					margin: 5px;
					border: solid 1px black;
				}
			}
		}
	}
`;

const Popular = () => {
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	const [list, setList] = useState(InterParkDummy);
	const router = useRouter();

	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
		console.log('list', list);
	}, []);

	return (
		<PopularLayout>
			<Section color={cssUnit.backgroundColors.Black} size={100}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>인기 유료 전시회</WrapTitle>
				</Wrap>
			</Section>
			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<ul className='allLists'>
							{list &&
								list.map((x, i) => {
									return (
										<li key={i}>
											<a target='_blank' href={x.href}>
												<div className='eachImg'>
													<Image
														src={x.imgSrc}
														alt='logo'
														layout='fill'
														objectFit='contain'
														unoptimized={true}
													></Image>
												</div>
											</a>
											<div className='textSection'>
												<p>{x.title}</p>
												<p>{x.period[0]}</p>
												<p>{x.period[1]}</p>
												<p>{x.place}</p>
											</div>
										</li>
									);
								})}
						</ul>
					</UnderDevSection>
				</Wrap>
			</Section>
		</PopularLayout>
	);
};

export default Popular;
