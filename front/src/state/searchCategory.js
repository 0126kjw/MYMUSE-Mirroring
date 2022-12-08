import { atom } from 'recoil';
//for duplicate warning in Next.js
//import { v4 } from 'uuid';

//museum or exhibition 상태관리
const searchCategory = atom({
	key: `searchCategory`,
	default: 'none',
});

export default searchCategory;
