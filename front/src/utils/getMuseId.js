import { IdBook } from 'src/data/idBook';

const getMuseId = (museName) => {
	return IdBook.find((v) => v.name == museName).id;
};

export default getMuseId;
