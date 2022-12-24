import { IdBook } from 'src/data/idBook';

const goToDetail = (name, router) => {
	IdBook.forEach((e) => {
		const Name = e.name;
		if (Name == name) {
			router.push(`/detail/${e.id}`);
			return;
		}
	});
};

export default goToDetail;
