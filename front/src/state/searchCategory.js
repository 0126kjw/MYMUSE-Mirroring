import { atom } from 'recoil';
//for duplicate warning in Next.js
//import { v4 } from 'uuid';

//museum or exhibition 상태관리
const searchCategory = atom({
	key: `searchCategory`,
	default: '박물관',
});

export default searchCategory;
