import { atom } from 'recoil';

const isMapFetching = atom({
	key: 'isMapFetching',
	default: false,
});

export default isMapFetching;
