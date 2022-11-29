import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const currentLoc = atom({
	key: 'currentPage',
	default: '/',
});
