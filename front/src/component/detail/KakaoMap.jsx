import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import cssUnit from 'src/lib/cssUnit';

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
						level={4}
					>
						<MapMarker position={{ lat: latitude, lng: longitude }}>
							<div
								style={{
									padding: '5px',
									color: '#000',
									alignItems: 'center',
									fontFamily: `${cssUnit.fontFamily.NotoKR_G}`,
								}}
							>
								{name} <br />
								<a
									href={`https://map.kakao.com/link/map/${name},${latitude},${longitude}`}
									style={{
										color: 'blue',
										textDecoration: 'none',
									}}
									target='_blank'
									rel='noreferrer'
								>
									큰지도보기
								</a>
								<br />
								<a
									href={`https://map.kakao.com/link/to/${name},${latitude},${longitude}`}
									style={{ color: 'blue', textDecoration: 'none' }}
									target='_blank'
									rel='noreferrer'
								>
									길찾기
								</a>
							</div>
						</MapMarker>
					</Map>
				</div>
			)}
		</>
	);
};

export default KakaoMap;
