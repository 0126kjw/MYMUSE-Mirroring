import { atom } from 'recoil';
//for duplicate warning in Next.js
//import { v4 } from 'uuid';

//museum or exhibition 상태관리
export const searchSec = atom({
	key: `searchSection`,
	default: 'none',
});
