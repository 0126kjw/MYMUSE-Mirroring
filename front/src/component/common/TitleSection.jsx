//for get url
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//styling
import cssUnit from 'lib/cssUnit';
import { Section } from 'styles/common';
//recoil
import { useSetRecoilState } from 'recoil';
import { currentLoc } from 'state/navibar';

const TitleSection = ({ children }) => {
	const setLoc = useSetRecoilState(currentLoc);
	const router = useRouter();
	let currentUrl = null;
	useEffect(() => {
		currentUrl = router.pathname;
		setLoc(currentUrl);
	}, []);

	return (
		<>
			<Section size={'150px'} color={cssUnit.backgroundColors.DeepBlack}>
				{children}
			</Section>
		</>
	);
};

export default TitleSection;
