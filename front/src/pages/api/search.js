import API from './Index';
const { Get } = API();

//'/serach'
export const getExhibitionDeatils = async () => {
	const respose = await Get(['search']);
	return respose;
};
