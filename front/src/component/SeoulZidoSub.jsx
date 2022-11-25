// library
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	ZoomableGroup,
} from 'react-simple-maps';
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
	background-color: ${cssUnit.backgroundColors.Gray};
	margin: 0px auto;

	.subLocation {
		position: absolute;
		text-align: center;
		top: 30px;
		width: 1200px;
		// height: 300px;
		z-index: 999;
		color: brown;
		font-size: 40px;
	}
`;

const LeftArrow = styled.div`
	position: absolute;
	top: 750px;
	left: 30px;
	font-size: 100px;
	color: black;
	z-index: 5;
	cursor: pointer;
`;

export default function SeoulZido() {
	const [tooltipName, setTooltipName] = useState('');
	const [pins, setPins] = useState(undefined);

	const [selectedMapState, setSelectedMapState] =
		useRecoilState(SelectedMapState);

	const [mapState, setMapState] = useState({
		map: outerMap,
		zoom: 2.2,
		center: [126.986, 37.57],
	});

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
				const foundGu = guId.find(
					(v) => v.name === selectedMapState.name,
				);
				if (foundGu != '') {
					try {
						mapData = await axios.get(
							`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}`,
						);
						pinData = await axios.get(
							`https://qrcavwxubm.us16.qoddiapp.com/map/${foundGu._id}/pins`,
						);
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
		<SubZidoLayout>
			<ReactTooltip type='light'>{tooltipName}</ReactTooltip>
			<div>
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
						{selectedMapState.mapKind == 'outer' ? (
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
												onClick={() => {
													setSelectedMapState({
														mapKind: 'inner',
														name: geo.properties
															.name,
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
												strokeWidth={
													mapState.isZoom ? 0 : 0.4
												}
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

						{selectedMapState.mapKind == 'outer'
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

						{selectedMapState.mapKind == 'inner'
							? pins &&
							  pins.map(({ name, coordinates }) => (
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
			</div>

			{selectedMapState.mapKind == 'inner' && (
				<>
					<div className='subLocation'>{selectedMapState.name}</div>
					<LeftArrow
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
						}}
					>
						⬅
					</LeftArrow>
				</>
			)}
		</SubZidoLayout>
	);
}
