import { IdBook } from 'src/data/idBook';

const getMuseId = (museName) => {
	IdBook.forEach((v) => {
		if (v.name == museName) {
			return v.id;
		}
	});
};

export default getMuseId;
