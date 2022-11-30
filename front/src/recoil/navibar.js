import { atom } from 'recoil';
//for duplicate warning in Next.js
import { v4 } from 'uuid';

export const currentLoc = atom({
	key: `currentPage/${v4()}`,
	default: 'none',
});
