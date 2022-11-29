import outerMap from 'data/seoul.json';
import guId from 'data/guId.json';
import zoomMap from 'data/zoomMap.json';
import axios from 'axios';

const getData = async (setMapState, setPins, selectedMapState) => {
	if (selectedMapState.mapKind == 'outer') {
		setMapState({
			map: outerMap,
			zoom: 2.2,
			center: [126.986, 37.57],
		});
	} else {
		let mapData = null;
		let pinData = null;
		const foundGu = guId.find((v) => v.name === selectedMapState.name);
		const mapDataUrl = `https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}`;
		const pinDataUrl = `https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}/pins`;
		const fetchURL = (url) => axios.get(url);
		const promiseArray = [mapDataUrl, pinDataUrl].map(fetchURL);

		if (foundGu != '') {
			Promise.all(promiseArray)
				.then((res) => {
					setMapState({
						map: res[0].data,
						zoom: 7,
						center: centerValue['center'],
					});
					setPins(res[1].data);
				})
				.catch((err) => {
					alert(err);
				});
			let centerValue = zoomMap[foundGu.name];
		}
	}
};

export default getData;
