import { atom } from 'recoil';

const currentMap = atom({
	key: 'currentMap',
	default: { mapKind: 'outer', name: '' },
});

export default currentMap;
