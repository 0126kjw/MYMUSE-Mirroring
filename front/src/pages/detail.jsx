import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
import Index from 'component/detail/Index';

// recoil state
import { useSetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import { currentLoc } from 'state/navibar';
import SelectedMapState from 'state/selectedMap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

export default function Detail() {
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
			<div className='detailTitle'> 박물관 이름 </div>
			<div className='detailBackground'>
				<Wrap>
					<UnderDevSection>
						<Index />
					</UnderDevSection>
				</Wrap>
			</div>
		</DetailContainer>
	);
}
