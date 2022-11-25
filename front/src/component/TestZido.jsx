import styled from '@emotion/styled'
import {ComposableMap,Geographies,Geography, Marker, ZoomableGroup,} from 'react-simple-maps'
import { useState, useEffect } from 'react'
import Seoul from '../data/seoul.json'
// import ReactTooltip from 'react-tooltip'

// const markers = [
// 	{
// 		markerOffset: -30,
// 		name: 'Buenos Aires',
// 		coordinates: [-58.3816, -34.6037],
// 	},
// ]

const testLayout = styled.div`
`

export default function SeoulZido() {

    const [tooltipName, setTooltipName] = useState('')
    const mapState = { zoom: 2 }

	return (
		<testLayout>
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
		</testLayout>
	)
}


