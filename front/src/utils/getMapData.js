import outerMap from 'src/data/seoul.json';
import guId from 'src/data/guId.json';
import zoomMap from 'src/data/zoomMap.json';
import axios from 'axios';

const getMapData = async (
	currentMap,
	setPins,
	setIsMapFetching,
	setMapScale,
	setMapCenter,
	setMapData,
	outerMap,
) => {
	if (currentMap.mapKind == 'outer') {
		await setMapCenter([126.986, 37.57]);
		await setMapScale(100000);
		await setMapData(outerMap);
		await setIsMapFetching(false);
	} else {
		const foundGu = guId.find((v) => v.name === currentMap.name);
		const mapDataUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/map/${foundGu._id}`;
		const pinDataUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/map/${foundGu._id}/pins`;
		const fetchURL = (url) => axios.get(url);
		const promiseArray = [mapDataUrl, pinDataUrl].map(fetchURL);

		if (foundGu != '') {
			await Promise.allSettled(promiseArray)
				.then((res) => {
					console.log('res', res);
					let centerValue = zoomMap[foundGu.name];
					setMapCenter(centerValue['center']);
					setMapScale(260000);
					setMapData(res[0].value.data);

					setPins(res[0].value.data.pins);
					setIsMapFetching(false);
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	}
};

export default getMapData;
