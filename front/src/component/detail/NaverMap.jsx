import Head from 'next/head';
import { useEffect } from 'react';

const NaverMap = () => {
	useEffect(() => {
		const cityhall = new naver.maps.LatLng(37.5666805, 126.9784147),
			map = new naver.maps.Map('map', {
				center: cityhall.destinationPoint(0, 200),
				zoom: 14,
			}),
			marker = new naver.maps.Marker({
				map: map,
				position: cityhall,
			});
		const contentString = [
			'<div>',
			'   <h3>서울특별시청</h3>',
			'   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
			'       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
			'       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
			'   </p>',
			'</div>',
		].join('');

		const infowindow = new naver.maps.InfoWindow({
			content: contentString,
		});

		infowindow.open(map, marker);
	}, []);
	return (
		<>
			<Head>
				<script
					src={'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=czihv9mhjx'}
					defer={false}
				></script>
			</Head>
			<div className='boxes'>
				<div id='map' style={{ width: '1000px', height: '400px' }}></div>
			</div>
		</>
	);
};
export default NaverMap;
