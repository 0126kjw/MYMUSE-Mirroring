import API from './Index';
const { Get } = API();

// '/map/{guid}'
export const getMapGu = async (paramsId) => {
	const respose = await Get(['map', paramsId]);
	return respose;
};
// 'map/{guid}/pins'
export const getExhibitionLists = async (paramsId) => {
	const response = await Get(['exhibitions', paramsId, pins]);
	return response;
};
