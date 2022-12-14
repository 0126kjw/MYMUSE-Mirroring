import { atom } from 'recoil';

const searchAgain = atom({
	key: 'searchAgain',
	default: { lastWord: '', needed: false },
});

export default searchAgain;
