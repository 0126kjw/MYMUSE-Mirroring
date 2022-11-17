import Link from 'next/link';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from 'react-simple-maps';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip'
import Seoul from '../../data/seoul.json';

export default function SubIndex(){

    const [tooltipName, setTooltipName] = useState('');
    const mapState = {zoom:2}

    return <>

        <h1>/pages/sub/index.js</h1>
        <Link href="/">/pages/index.js</Link>

            <ReactTooltip type='light'>{tooltipName}</ReactTooltip>
            <div style={{
                backgroundColor:'yellow',
                width:'500px',
            }}>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
                    data-tip=""
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

                                    return <Geography
                                        fill={"gray"}
                                        stroke={'#F5F5F5'}
                                        strokeWidth={mapState.isZoom ? 0 : 0.4}
                                        
                                        onMouseEnter={() => {
                                            const { name } = geo.properties;
                                            setTooltipName(name);
                                        }}

                                        onClick={()=>{
                                            const { name } = geo.properties;
                                            alert(name)
                                        }}
                                        
                                        onMouseLeave={() => {
                                            setTooltipName('');
                                        }}

                                        key={geo.rsmKey}
                                        geography={geo}

                                        style={{
                                            default: {
                                                outline: "none",
                                            },
                                            hover: {
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "fff",
                                                outline: "#333",
                                            },
                                        }}
                                    />
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
            
    </>
}


