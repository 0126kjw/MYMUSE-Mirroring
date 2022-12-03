// library
import { ComposableMap, ZoomableGroup } from 'react-simple-maps';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

// function
import getData from 'src/component/zido/function_getData';
import SeoulZidoSubStyle from 'src/styles/compoStyles/SeoulZidoSubStyle';

// State
import SelectedMapState from 'src/state/selectedMap';
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
	// global state
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	const [isMapFetching, setIsMapFetching] = useRecoilState(IsMapFetchingState);

	// state
	const [tooltipName, setTooltipName] = useState('');
	const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip
	const [pins, setPins] = useState([]);
	const [hoverPin, setHoverPin] = useState('');
	const [mapState, setMapState] = useState({
		map: outerMap,
		zoom: 2.2,
		center: [126.986, 37.57],
	});

	// useEffect
	useEffect(() => {
		setIsMounted(true);
	}, []);
	useEffect(() => {
		getData(setMapState, setPins, selectedMapState, isMapFetching, setIsMapFetching);
	}, [selectedMapState]);

	return (
		<>
			<SeoulZidoSubStyle>
				{isMounted && !isMapFetching ? (
					<>
						<ReactTooltip className='tooltipStyle' type='light'>
							{tooltipName}
						</ReactTooltip>

						{/*  react-simple-maps */}

						<div className='react-simple-maps'>
							<TopDescription selectedMapState={selectedMapState} />
							<ComposableMap
								projection='geoMercator'
								projectionConfig={{
									rotate: [-60, 0, 5],
									scale: 38000,
								}}
								data-tip=''
							>
								<ZoomableGroup
									center={mapState.center}
									zoom={mapState.zoom}
									minZoom={mapState.zoom}
									maxZoom={mapState.zoom}
								>
									<Geographies_Outer
										selectedMapState={selectedMapState}
										setSelectedMapState={setSelectedMapState}
										mapState={mapState}
										setIsMapFetching={setIsMapFetching}
									/>

									<Geographies_Inner
										selectedMapState={selectedMapState}
										setSelectedMapState={setSelectedMapState}
										mapState={mapState}
									/>

									<Marker_Outer
										markers={markers}
										selectedMapState={selectedMapState}
									/>
									<Marker_Inner
										selectedMapState={selectedMapState}
										pins={pins}
										setTooltipName={setTooltipName}
										setHoverPin={setHoverPin}
									/>
								</ZoomableGroup>
							</ComposableMap>
							<LeftArrow
								selectedMapState={selectedMapState}
								setMapState={setMapState}
								setPins={setPins}
								setSelectedMapState={setSelectedMapState}
								outerMap={outerMap}
							/>
						</div>
						<CreatedList
							selectedMapState={selectedMapState}
							pins={pins}
							hoverPin={hoverPin}
						/>
					</>
				) : (
					<div className='dataFetchingMsg'>데이터를 가져오는 중입니다</div>
				)}
			</SeoulZidoSubStyle>
		</>
	);
}
