import { atom } from 'recoil';

const selectedMap = atom({
	key: 'selectedMap',
	default: { mapKind: 'outer', name: '' },
});

export default selectedMap;
