import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = ({ latitude, longitude, name }) => {
	// alert(latitude);
	return (
		<div className='boxes'>
			<Map
				center={{ lat: latitude, lng: longitude }}
				style={{
					width: '100%',
					height: '360px',
				}}
			>
				<MapMarker position={{ lat: latitude, lng: longitude }}>
					<span
						style={{
							color: '#000',
						}}
					>
						{name}
					</span>
				</MapMarker>
			</Map>
		</div>
	);
};

export default KakaoMap;
