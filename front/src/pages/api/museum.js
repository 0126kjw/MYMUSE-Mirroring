import API from './Index';

const { Get } = API();

// '/museums/{id}'
export const getMuseumDeatils = async (paramsId) => {
	const respose = await Get(['museums', paramsId]);
	return respose;
};
//'museums'
export const getMuseumLists = async () => {
	const response = await Get(['museums']);
	return response;
};
