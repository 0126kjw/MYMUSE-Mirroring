import DataTable_Introduction from 'src/component/detail/DataTable_Introduction';
import DataTable_Agency from 'src/component/detail/DataTable_Agency';
import DataTable_Schedule from 'src/component/detail/DataTable_Schedule';
import DataTable_AdmissionFee from 'src/component/detail/DataTable_AdmissionFee';
import styled from '@emotion/styled';
import DetailSlider from './DetailSlider';
import KakaoMap from './KakaoMap';
import { useEffect } from 'react';

const IndexStyle = styled.div`
	.bkgroundColor {
		background-color: aliceblue;
		font-size: 20px;
	}
	.museData {
		margin: 0 auto;
		width: 1200px;
		@media screen and (max-width: 1200px) {
			width: 100%;
			height: 100%;
		}
	}
	.boxContainer {
		width: 1190px;
		margin: 0 auto;
		padding: 0.3%;
		padding-top: 3%;
		padding-bottom: 3%;
		@media screen and (max-width: 1250px) {
			width: 100%;
			height: 100%;
			padding: 0;
			margin-top: 30px;
			margin-bottom: 30px;
		}
	}
	.boxes {
		width: 1200px;
		/* width: 90%; */
		margin: 0 auto;
		padding-top: 20px;
		padding-bottom: 30px;
		border-bottom: solid 3px black;
		border-top: solid 3px black;
		border-right: solid 5px black;
		border-left: solid 5px black;
		@media screen and (max-width: 1200px) {
			width: 80%;
			/* padding: 32px; */
		}
	}
	.subTitle {
		color: brown;
	}
	.col-1 {
		margin: 0 auto;
		background-color: lightgray;
		border: solid 1px aliceblue;
		padding: 50px;
		margin-bottom: 10px;
		color: black;
		@media screen and (max-width: 1200px) {
			width: 80%;
			padding: 30px;
		}
		@media screen and (max-width: 600px) {
			width: 90%;
			padding: 10px;
		}
	}
	.col-2 {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 15% 85%;
		div {
			background-color: lightgray;
			border: solid 1px aliceblue;
			color: black;
		}
		@media screen and (max-width: 1200px) {
			width: 90%;
		}
	}
	.NaverMapCompStyle {
		height: 500px;
		margin: 0 auto;
		border-left: solid 5px black;
		border-right: solid 5px black;
	}
	.Middle {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Index = ({}) => {
	useEffect(() => {
		// src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
		const kakaosdk = document.createElement('script');
		kakaosdk.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`;
		kakaosdk.defer = true;
		kakaosdk.async = true;
		document.head.appendChild(kakaosdk);
	}, []);
	return (
		<IndexStyle>
			<div className='bkgroundColor'>
				<div className='museData'>
					<DetailSlider />
					<div className='boxContainer'>
						<DataTable_Introduction />
					</div>
					<div className='boxContainer'>
						<DataTable_Agency />
					</div>
					<div className='boxContainer'>
						<DataTable_Schedule />
					</div>
					<div className='boxContainer'>
						<DataTable_AdmissionFee />
					</div>
					<div className='boxContainer'>
						<KakaoMap />
					</div>
				</div>
			</div>
		</IndexStyle>
	);
};

export default Index;
