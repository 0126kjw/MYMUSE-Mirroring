// library
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { useRecoilState } from 'recoil';
import SelectedMapState from '../state/selectedMap';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import cssUnit from 'lib/cssUnit';

// data
import outerMap from '../data/seoul.json';
import guId from '../data/guId.json';
import zoomMap from '../data/zoomMap.json';
import { markers } from '../data/basicMarkers';

const SubZidoLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.backgroundColors.Gray};
	margin: 0px auto;
	margin-top: 120px;
	padding: 0px;
	width: 800px;

	.subLocationName {
		position: relative;
		width: 800px;
		z-index: 999;
		color: brown;
		height: 50px;
		line-height: 50px;
		background-color: aliceblue;
	}

	.react-simple-maps {
		width: 800px;
		background-color: gray;
	}

	.leftArrow {
		position: absolute;
		top: 550px;
		left: 10px;
		font-size: 80px;
		color: black;
		z-index: 5;
		cursor: pointer;
	}

	.pinListUps {
		margin: 0px;
		background-color: gray;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
		ul {
			margin: 0px;
			padding-left: 30px;
			li {
				margin-bottom: 20px;
			}
		}

		.basic {
			position: relative;
			width: 700px;
			background-color: aliceblue;
			list-style: none;
			border: solid 10px aliceblue;
			margin: 10px;

			&:hover {
				background-color: pink;
				font-weight: bold;
				cursor: pointer;
			}
		}

		.borderRed {
			position: relative;
			width: 700px;
			background-color: aliceblue;
			list-style: none;
			border: solid 10px red;
			margin: 10px;

			&:hover {
				background-color: pink;
				font-weight: bold;
				cursor: pointer;
			}
		}
	}

	.circlePinViewer {
		position: absolute;
		text-align: left;
		top: 682px;
		width: 10px;
		z-index: 999;
		// background-color: green;
		margin-top: 40px;
		margin-bottom: 40px;

		padding-top: 20px;
		padding-bottom: 20px;

		ul {
			margin: 0px;
			padding: 0px;
		}

		li {
			list-style: none;
		}
	}

	.guideText {
		position: relative;
		background-color: gray;
		margin-top: 40px;
		margin-bottom: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.tooltipStyle {
		color: red;
		font-size: 25px;
	}
`;

export default function SeoulZido() {
	// useState
	const [tooltipName, setTooltipName] = useState('');
	const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip
	const [pins, setPins] = useState([]);
	const [hoverPin, setHoverPin] = useState('');

	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);

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
		const func = async () => {
			if (selectedMapState.mapKind == 'outer') {
				setMapState({
					map: outerMap,
					zoom: 2.2,
					center: [126.986, 37.57],
				});
			} else {
				let mapData = undefined;
				let pinData = undefined;
				const foundGu = guId.find((v) => v.name === selectedMapState.name);
				if (foundGu != '') {
					try {
						mapData = await axios.get(
							`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}`,
						);
						pinData = await axios.get(
							`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}/pins`,
						);
						console.log('pinData.data.pins', pinData.data.pins);
						console.log('pinsLength', pinData.data.pins.length);
						setPins(pinData.data.pins);
					} catch {
						alert('failed to load data');
					}
					let centerValue = zoomMap[foundGu.name];
					setMapState({
						map: mapData.data,
						zoom: 7,
						center: centerValue['center'],
					});
				}
			}
		};
		(async () => {
			await func();
		})();
	}, [selectedMapState]);

	return (
		<>
			{isMounted ? (
				<SubZidoLayout>
					<ReactTooltip className='tooltipStyle' type='light'>
						{tooltipName}
					</ReactTooltip>
					<div className='react-simple-maps'>
						{selectedMapState.mapKind == 'inner' && (
							<>
								<div className='subLocationName'>{selectedMapState.name}</div>
							</>
						)}
						{selectedMapState.mapKind == 'outer' && (
							<>
								<div className='subLocationName'>서울시</div>
							</>
						)}

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
								{selectedMapState.mapKind == 'outer' ? (
									<Geographies geography={mapState.map}>
										{({ geographies }) =>
											geographies.map((geo) => {
												return (
													<Geography
														fill={'cornflowerblue'}
														stroke={'#F5F5F5'}
														strokeWidth={mapState.isZoom ? 0 : 0.4}
														onClick={() => {
															setSelectedMapState({
																mapKind: 'inner',
																name: geo.properties.name,
															});
														}}
														key={geo.rsmKey}
														geography={geo}
														style={{
															default: {
																outline: 'none',
															},
															hover: {
																fill: 'chartreuse',
																outline: 'none',
																cursor: 'pointer',
															},
															pressed: {
																fill: 'fff',
																outline: '#333',
															},
														}}
													/>
												);
											})
										}
									</Geographies>
								) : null}

								{selectedMapState.mapKind == 'inner' ? (
									<Geographies geography={mapState.map}>
										{({ geographies }) =>
											geographies.map((geo) => {
												return (
													<Geography
														fill={'cornflowerblue'}
														stroke={'#F5F5F5'}
														strokeWidth={mapState.isZoom ? 0 : 0.4}
														key={geo.rsmKey}
														geography={geo}
														style={{
															default: {
																outline: 'none',
															},
															hover: {
																outline: 'none',
															},
															pressed: {
																fill: 'fff',
																outline: '#333',
															},
														}}
													/>
												);
											})
										}
									</Geographies>
								) : null}

								{selectedMapState.mapKind == 'outer' && isMounted
									? markers.map(({ name, coordinates, markerOffset }) => (
											<Marker key={name} coordinates={coordinates}>
												<text
													textAnchor='middle'
													y={markerOffset}
													style={{
														fontFamily: 'system-ui',
														fontSize: '8',
														fontWeight: 'bold',
														cursor: 'default',
													}}
												>
													{name}
												</text>
											</Marker>
									  ))
									: null}

								{selectedMapState.mapKind == 'inner'
									? pins &&
									  isMounted &&
									  pins.map(({ name, coordinates, _id }) => (
											<Marker
												key={name}
												coordinates={coordinates}
												onClick={() => {
													alert('박물관 page로 이동');
												}}
												onMouseEnter={() => {
													setTooltipName(name);
													setHoverPin(_id);
												}}
												onMouseLeave={() => {
													setTooltipName('');
													// setHoverPin('');
												}}
												style={{
													default: {
														fill: 'rgba(172, 232, 207, .9)',
													},
													hover: {
														fill: 'rgba(172, 232, 207, .9)',
														outline: 'white',
														stroke: 'pink',
														strokeWidth: 0.1,
														cursor: 'pointer',
													},
												}}
											>
												<circle
													r={1}
													fill='#F00'
													stroke='#fff'
													strokeWidth={0.2}
												/>
												<text
													textAnchor='middle'
													y='-2'
													style={{
														fontFamily: 'system-ui',
														fontSize: '1.6',
														fontWeight: 'bold',
														cursor: 'pointer',
													}}
												>
													{/* {name} */}
												</text>
											</Marker>
									  ))
									: null}
							</ZoomableGroup>
						</ComposableMap>
						{selectedMapState.mapKind == 'inner' && (
							<>
								<div
									className='leftArrow'
									onClick={() => {
										setSelectedMapState({
											mapKind: 'outer',
											name: '',
										});
										setMapState({
											zoom: 2,
											map: outerMap,
											center: [126.986, 37.561],
										});
										setPins((prev) => null);
									}}
								>
									⬅
								</div>
							</>
						)}
					</div>

					{selectedMapState.mapKind == 'inner' && pins && pins.length > 0 && (
						<div className='pinListUps'>
							<ul>
								{pins.map((x) => {
									return (
										<div className={x._id != hoverPin ? 'basic' : 'borderRed'}>
											<li key={x._id}>
												<p>{x.name}</p>
												<p>{x.address}</p>
											</li>
										</div>
									);
								})}
							</ul>
						</div>
					)}

					{selectedMapState.mapKind == 'inner' && pins && pins.length == 0 && (
						<div className='guideText'>
							<p>{selectedMapState.name} 박물관은 찾을 수 없습니다</p>
						</div>
					)}

					{selectedMapState.mapKind == 'inner' && (
						<div className='guideText'>
							<p>
								박물관 위치가 겹치는 경우 ,<br></br> 지도에서 확인이 어려울 수
								있습니다.
							</p>
						</div>
					)}

					{selectedMapState.mapKind == 'outer' && (
						<div className='guideText'>
							<p>박물관 목록에서 상세 페이지로 이동할 수 있습니다.</p>
						</div>
					)}
				</SubZidoLayout>
			) : null}
		</>
	);
}
