import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

import { Section, Wrap, WrapTitle } from 'src/styles/common';
import { UnderDevSection } from 'src/styles/compoStyles/underDev';
import Index from 'src/component/detail/Index';

// recoil state
import { useSetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import { currentLoc } from 'src/state/navibar';
import SelectedMapState from 'src/state/selectedMap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

// wrap all
const DetailContainer = styled.div`
	margin: 0px auto;
	background-color: ${cssUnit.colors.DeepBlack};
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	.detailTitle {
		position: relative;
		text-align: center;
		line-height: 50px;
		padding-top: 50px;
		padding-bottom: 50px;

		color: ${cssUnit.colors.White};

		width: 100%;
		font-size: ${cssUnit.fontSize.medium};
	}
	.detailBackground {
		background-color: ${cssUnit.backgroundColors.White};
	}
`;

export default function Detail({ item }) {
	const router = useRouter();
	const setLoc = useSetRecoilState(currentLoc);
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);

	useEffect(() => {
		setLoc(router.pathname);
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<DetailContainer>
			<div className='detailTitle'> 박물관 상세설명 </div>
			<div className='detailBackground'>
				<Wrap>
					<UnderDevSection>
						<Index item={item} />
					</UnderDevSection>
				</Wrap>
			</div>
		</DetailContainer>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.id;
	const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/museums/${id}`;
	const res = await axios.get(apiUrl);
	const data = res.data;

	return {
		props: {
			item: data,
		},
	};
}
