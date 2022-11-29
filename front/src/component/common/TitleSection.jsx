//for get url
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//styling
import cssUnit from 'lib/cssUnit';
import { Section } from 'styles/common';
//recoil
import { useSetRecoilState } from 'recoil';
import { currentLoc } from 'recoil/navibar';

const TitleSection = ({ children }) => {
	//recoil atom
	const setLoc = useSetRecoilState(currentLoc);

	const router = useRouter();
	let currentUrl = null;
	//set atom
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
