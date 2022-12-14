// library
import { ComposableMap, ZoomableGroup } from 'react-simple-maps';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

// function
import getData from 'src/utils/getMapData';

// Style
import SeoulZidoSubStyle from 'src/styles/compoStyles/SeoulZidoSubStyle';

// State
import CurrentMapState from 'src/state/currentMap';
import IsMapFetchingState from 'src/state/isMapFetching';

// data
import outerMap from 'src/data/seoul.json';
import { markers } from 'src/data/basicMarkers';

// Component
import CreatedList from 'src/component/zido/CreatedList';
import LeftArrow from 'src/component/zido/LeftArrow';
import Marker_Inner from 'src/component/zido/Marker_Inner';
import Marker_Outer from 'src/component/zido/Marker_Outer';
import Geographies_Inner from 'src/component/zido/Geographies_Inner';
import Geographies_Outer from 'src/component/zido/Geographies_Outer';
import TopDescription from 'src/component/zido/TopDescription';

export default function SeoulZido() {
	const [isMapFetching, setIsMapFetching] = useRecoilState(IsMapFetchingState);
	const [currentMap, setCurrentMap] = useRecoilState(CurrentMapState);

	// state
	const [tooltipName, setTooltipName] = useState('');
	const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip
	const [pins, setPins] = useState([]);
	const [hoverPin, setHoverPin] = useState('');

	const [mapCenter, setMapCenter] = useState([126.986, 37.57]);
	const [mapScale, setMapScale] = useState(100000);
	const [mapData, setMapData] = useState(outerMap);

	// useEffect
	useEffect(() => {
		setIsMounted(true);
	}, []);
	useEffect(() => {
		getData(
			currentMap,
			setPins,
			setIsMapFetching,
			setMapScale,
			setMapCenter,
			setMapData,
			outerMap,
		);
	}, [currentMap]);

	return (
		<>
			<SeoulZidoSubStyle>
				{isMounted && !isMapFetching ? (
					<>
						<ReactTooltip className='tooltipStyle' type='light'>
							{tooltipName}
						</ReactTooltip>

						<div className='react-simple-maps'>
							<TopDescription currentMap={currentMap} />
							<ComposableMap
								projection='geoMercator'
								projectionConfig={{
									center: mapCenter,
									scale: mapScale,
								}}
								data-tip=''
							>
								<Geographies_Outer
									currentMap={currentMap}
									setCurrentMap={setCurrentMap}
									setIsMapFetching={setIsMapFetching}
									mapData={mapData}
									outerMap={outerMap}
								/>

								<Geographies_Inner mapData={mapData} currentMap={currentMap} />

								<Marker_Outer
									markers={markers}
									currentMap={currentMap}
									setIsMapFetching={setIsMapFetching}
									setCurrentMap={setCurrentMap}
								/>
								<Marker_Inner
									currentMap={currentMap}
									pins={pins}
									setTooltipName={setTooltipName}
									setHoverPin={setHoverPin}
								/>
							</ComposableMap>
							<LeftArrow
								currentMap={currentMap}
								setPins={setPins}
								setCurrentMap={setCurrentMap}
							/>
						</div>
						<CreatedList currentMap={currentMap} pins={pins} hoverPin={hoverPin} />
					</>
				) : (
					<div className='dataFetchingMsg'>데이터를 가져오는 중입니다</div>
				)}
			</SeoulZidoSubStyle>
		</>
	);
}
