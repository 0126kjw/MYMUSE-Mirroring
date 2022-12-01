import API from './Index';
const { Get } = API();

// '/exhibitions/{id}'
export const getExhibitionDeatils = async (paramsId) => {
	const respose = await Get(['exhibitions', paramsId]);
	return respose;
};
// '/exhibitions'
export const getExhibitionLists = async () => {
	const response = await Get(['exhibitions']);
	return response;
};
