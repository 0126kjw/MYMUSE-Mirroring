import { IdBook } from 'src/data/idBook';

const goToDetailPage = (museName, router) => {
	router.push(`/detail/${IdBook.find((v) => v.name === museName).id}`);
};
export default goToDetailPage;
