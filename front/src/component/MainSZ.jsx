// library
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	ZoomableGroup,
} from 'react-simple-maps';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

// data
import outerMap from '../data/seoul.json';
import guId from '../data/guId.json';
import zoomMap from '../data/zoomMap.json';
import { markers, markers_gangNam, museum_pin } from '../data/basicMarkers';

const LeftArrow = styled.div`
	position: absolute;
	top: 1100px;
	font-size: 100px;
	color: black;
	z-index: 5;
	cursor: pointer;
`;

//  const ReactTooltipStyled = styled(ReactTooltip)`
//   &.type-dark.place-top {
//     background-color: blue;
//     padding: 0.3rem 1rem;

//     &:after {
//       border-top-color: blue;
//     }
//   }
// `;

export default function MainZido() {
	let mapData = undefined;
	let pinData = undefined;

	const [tooltipName, setTooltipName] = useState('');
	const [pins, setPins] = useState(undefined);
	useEffect(() => {}, [pins]);

	const [mapState, setMapState] = useState({
		currentView: 'outer', // 'outer', 'inner'
		zoom: 2.2,
		guId: '',
		guName: '',
		clickSpotId: '',
		clickedName: '', // 구나 핀 이름
		map: outerMap,
		center: [126.986, 37.57],
	});

	return (
		<div
		// style={{
		// 	width: '100%',
		// 	height: '100%',
		// }}
		>
			{/* <ReactTooltip type='light'>{tooltipName}</ReactTooltip> */}
			<div
				style={{
					backgroundColor: 'transparent',
					width: '100%',
				}}
			>
				<ComposableMap
					projection='geoMercator'
					projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
					data-tip=''
				>
					<ZoomableGroup
						center={mapState.center}
						zoom={mapState.zoom}
						minZoom={mapState.zoom}
						maxZoom={mapState.zoom}
					>
						<Geographies geography={mapState.map}>
							{({ geographies }) =>
								geographies.map((geo) => {
									return (
										<Geography
											fill={'cornflowerblue'}
											stroke={'#F5F5F5'}
											strokeWidth={
												mapState.isZoom ? 0 : 0.4
											}
											onClick={async () => {
												if (
													mapState.currentView ==
													'outer'
												) {
													const { name } =
														geo.properties;
													const value = zoomMap[name];

													const foundGu = guId.find(
														(v) =>
															v.name ===
															geo.properties.name,
													);
													try {
														mapData =
															await axios.get(
																`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}`,
															);
														pinData =
															await axios.get(
																`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}/pins`,
															);
														setPins(
															pinData.data.pins,
														);
													} catch {
														alert(
															'failed to get value',
														);
													}

													setMapState({
														...mapState,
														currentView: 'inner',
														zoom: 7,
														map: mapData.data,
														clickedName: name,
														center: value['center'],
													});
												}
											}}
											key={geo.rsmKey}
											geography={geo}
											style={
												mapState.currentView == 'outer'
													? {
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
													  }
													: {
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
													  }
											}
										/>
									);
								})
							}
						</Geographies>

						{mapState.currentView == 'outer'
							? markers.map(
									({ name, coordinates, markerOffset }) => (
										<Marker
											key={name}
											coordinates={coordinates}
										>
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
									),
							  )
							: null}

						{mapState.currentView == 'inner'
							? pins &&
							  pins.map(
									({
										name,
										coordinates,
										// markerOffsetY,
										// markerOffsetX,
									}) => (
										<Marker
											key={name}
											coordinates={coordinates}
											onClick={() => {
												// setTooltipName('')
												// 박물관 detail page로 이동
											}}
											onMouseEnter={() => {
												setTooltipName(name);
											}}
											onMouseLeave={() => {
												setTooltipName('');
											}}
											style={{
												default: {
													fill: 'rgba(172, 232, 207, .9)',
												},
												hover: {
													fill: 'rgba(172, 232, 207, .9)',
													outline: 'white',
													stroke: 'red',
													strokeWidth: 0.1,
													cursor: 'pointer',
												},
											}}
										>
											{/* {museum_pin} */}
											<circle
												r={1}
												fill='#F00'
												stroke='#fff'
												strokeWidth={0.2}
											/>
											<text
												textAnchor='middle'
												y='-2'
												// x={markerOffsetX}
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
									),
							  )
							: null}
					</ZoomableGroup>
				</ComposableMap>
			</div>
			{mapState.currentView == 'inner' && (
				<>
					{/* <LeftArrow
						onClick={() => {
							setMapState({
								currentView: 'outer',
								zoom: 2,
								guId: '',
								guName: '',
								clickSpotId: '',
								clickedName: '',
								map: outerMap,
								center: [126.986, 37.561],
							});
						}}
					>
						⬅
					</LeftArrow> */}
				</>
			)}
		</div>
	);
}
