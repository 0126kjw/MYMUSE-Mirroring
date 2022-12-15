import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';

const KakaoMap = ({ latitude, longitude, name }) => {
	const [isMounted, setIsMounted] = useState(false);

	const loadedKakaoSdk = () => {
		setIsMounted(true);
	};

	useEffect(() => {
		// src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
		// if (item === '404') {
		// 	return;
		// }
		console.log('typeof window', typeof window);
		if (typeof window !== 'undefined') {
			const kakaosdk = document.createElement('script');
			kakaosdk.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOSHARE_API_KEY}&libraries=services,clusterer&autoload=false`;
			kakaosdk.defer = true;
			kakaosdk.async = true;
			document.head.appendChild(kakaosdk);
			kakaosdk.addEventListener('load', loadedKakaoSdk);
			return () => {
				kakaosdk.removeEventListener('load', loadedKakaoSdk);
			};
		}
	}, []);

	return (
		<>
			{isMounted && (
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
			)}
		</>
	);
};

export default KakaoMap;
