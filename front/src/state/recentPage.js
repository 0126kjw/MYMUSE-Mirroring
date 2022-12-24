import { atom } from 'recoil';

const recentPage = atom({
	key: 'recentPage',
	default: [],
});

export default recentPage;
