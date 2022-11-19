import Link from 'next/link'
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	ZoomableGroup,
} from 'react-simple-maps'
import { useState, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip'
import Seoul from '../../data/seoul.json'

const markers = [
	{
		markerOffset: -30,
		name: 'Buenos Aires',
		coordinates: [-58.3816, -34.6037],
	},
	{ markerOffset: 15, name: '도봉', coordinates: [127.036, 37.674] },
	{ markerOffset: 15, name: '노원', coordinates: [127.075, 37.674] },
	{ markerOffset: 15, name: '강북', coordinates: [127.015, 37.647] },
	{ markerOffset: 15, name: '성북', coordinates: [127.015, 37.615] },
	{ markerOffset: 15, name: '종로', coordinates: [126.985, 37.593] },
	{ markerOffset: 15, name: '중', coordinates: [126.996, 37.57] },
	{ markerOffset: 15, name: '용산', coordinates: [126.982, 37.543] },
	{ markerOffset: 15, name: '마포', coordinates: [126.915, 37.565] },
	{ markerOffset: 15, name: '서대문', coordinates: [126.937, 37.585] },
	{ markerOffset: 15, name: '은평', coordinates: [126.93, 37.63] },
	{ markerOffset: 15, name: '중랑', coordinates: [127.095, 37.615] },
	{ markerOffset: 15, name: '동대문', coordinates: [127.057, 37.593] },
	{ markerOffset: 15, name: '성동', coordinates: [127.043, 37.562] },
	{ markerOffset: 15, name: '광진', coordinates: [127.092, 37.562] },
	{ markerOffset: 15, name: '강동', coordinates: [127.144, 37.562] },
	{ markerOffset: 15, name: '송파', coordinates: [127.11, 37.522] },
	{ markerOffset: 15, name: '강남', coordinates: [127.05, 37.512] },
	{ markerOffset: 15, name: '서초', coordinates: [127.007, 37.508] },
	{ markerOffset: 15, name: '동작', coordinates: [126.955, 37.514] },
	{ markerOffset: 15, name: '관악', coordinates: [126.952, 37.48] },
	{ markerOffset: 15, name: '금천', coordinates: [126.903, 37.475] },
	{ markerOffset: 15, name: '구로', coordinates: [126.85, 37.505] },
	{ markerOffset: 15, name: '양천', coordinates: [126.855, 37.529] },
	{ markerOffset: 15, name: '영등포', coordinates: [126.915, 37.537] },
	{ markerOffset: 15, name: '강서', coordinates: [126.825, 37.57] },
]

export default function Zido() {
	const [tooltipName, setTooltipName] = useState('')
	const mapState = { zoom: 2 }

	return (
		<>
			<h1> 서울시 지도</h1>
			<Link href='/'>/pages/index.js</Link>

			{/* <ReactTooltip type='light'>{tooltipName}</ReactTooltip> */}
			<div
				style={{
					backgroundColor: 'beige',
					width: '500px',
				}}
			>
				<ComposableMap
					projection='geoMercator'
					projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
					data-tip=''
				>
					<ZoomableGroup
						center={[126.985, 37.561]}
						zoom={mapState.zoom}
						minZoom={mapState.zoom - 0.7}
						maxZoom={mapState.zoom + 0.7}
					>
						<Geographies geography={Seoul}>
							{({ geographies }) =>
								geographies.map((geo) => {
									return (
										<Geography
											fill={'cornflowerblue'}
											stroke={'#F5F5F5'}
											strokeWidth={
												mapState.isZoom ? 0 : 0.4
											}
											onMouseEnter={() => {
												const { name } = geo.properties
												setTooltipName(name)
											}}
											onClick={() => {
												const { name } = geo.properties
												alert(name)
											}}
											onMouseLeave={() => {
												setTooltipName('')
											}}
											key={geo.rsmKey}
											geography={geo}
											style={{
												default: {
													outline: 'none',
												},
												hover: {
													// fill: "#D6D6DA",
													fill: 'chartreuse',
													outline: 'none',
												},
												pressed: {
													fill: '#E42',
													outline: '#333',
												},
											}}
										/>
									)
								})
							}
						</Geographies>

						{markers.map(({ name, coordinates, markerOffset }) => (
							<Marker key={name} coordinates={coordinates}>
								<g
									fill='none'
									// stroke="#FF5533"
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									transform='translate(-12, -24)'
								>
									<circle cx='12' cy='10' r='3' />
									<path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
								</g>
								<text
									textAnchor='middle'
									y={markerOffset}
									style={{
										fontFamily: 'system-ui',
										fontSize: '8',
										fontWeight: 'bold',
									}} // fill:'black', <= text color
								>
									{name}
								</text>
							</Marker>
						))}
					</ZoomableGroup>
				</ComposableMap>
			</div>
		</>
	)
}
