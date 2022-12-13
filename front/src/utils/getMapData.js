import outerMap from 'src/data/seoul.json';
import guId from 'src/data/guId.json';
import zoomMap from 'src/data/zoomMap.json';
import axios from 'axios';

const getMapData = async (
	setMapState,
	setPins,
	selectedMapState,
	isMapFetching,
	setIsMapFetching,
) => {
	if (selectedMapState.mapKind == 'outer') {
		setMapState({
			map: outerMap,
			zoom: 2.2,
			center: [126.986, 37.57],
		});
	} else {
		const foundGu = guId.find((v) => v.name === selectedMapState.name);
		const mapDataUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/map/${foundGu._id}`;
		const pinDataUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/map/${foundGu._id}/pins`;
		const fetchURL = (url) => axios.get(url);
		const promiseArray = [mapDataUrl, pinDataUrl].map(fetchURL);

		if (foundGu != '') {
			Promise.allSettled(promiseArray)
				.then((res) => {
					setMapState({
						map: res[0].value.data,
						zoom: 7,
						center: centerValue['center'],
					});
					setPins(res[0].value.data.pins);
					setIsMapFetching(false);
				})
				.catch((err) => {
					alert(err);
				});
			let centerValue = zoomMap[foundGu.name];
		}
	}
};

export default getMapData;
