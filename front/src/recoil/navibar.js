import React from 'react';
import { atom } from 'recoil';

export const currentLoc = atom({
	key: 'currentPage',
	default: 'none',
});
