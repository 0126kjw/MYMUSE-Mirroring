// component
import DataTable_Introduction from 'src/component/detail/DataTable_Introduction';
import DataTable_Agency from 'src/component/detail/DataTable_Agency';
import DataTable_Schedule from 'src/component/detail/DataTable_Schedule';
import DataTable_AdmissionFee from 'src/component/detail/DataTable_AdmissionFee';
import DetailSlider from './DetailSlider';
import KakaoMap from './KakaoMap';

// style
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

// library
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexStyle = styled.div`
	.bkgroundColor {
		background-color: ${cssUnit.backgroundColors.White};
		font-size: 20px;
	}
	.museData {
		margin: 0 auto;
		width: 1200px;
		animation-duration: 0.75s;
		animation-delay: 0.5s;
		animation-name: animate-fade;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
		animation-fill-mode: backwards;

		@keyframes animate-fade {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@media screen and (max-width: 1200px) {
			width: 100%;
			height: auto;
		}
	}
	.boxContainer {
		width: 1200px;
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

		animation-duration: 0.75s;
		animation-delay: 0.5s;
		animation-name: animate-fade;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
		animation-fill-mode: backwards;

		@keyframes animate-fade {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		:nth-last-of-type(5) {
			/* animation-name: animate-fade;
			animation-delay: 0.5s;
			animation-duration: 0.75s;
			animation-timing-function: ease-in-out;
			//animation-fill-mode: forwards;
			animation-fill-mode: none; */
		}

		:nth-last-of-type(4) {
		}

		:nth-last-of-type(3) {
		}

		:nth-last-of-type(2) {
		}

		/* :nth-last-of-type(1) {
			animation-delay: 1.48s;
		} */
	}
	.boxes {
		width: 1200px;
		margin: 0 auto;
		padding-top: 20px;
		padding-bottom: 30px;
		/* border-bottom: solid 3px black;
		border-top: solid 3px black;
		border-right: solid 5px black;
		border-left: solid 5px black; */

		/* button {
			width: 150px;
			height: 50px;
			margin-top: 10px;
			margin-bottom: 10px;

			border: 0;
			border-radius: 0.5em;

			background-color: ${cssUnit.colors.DarkGold};

			word-break: keep-all;

			a {
				//padding: 10px;
				font-weight: 600;
				font-family: ${cssUnit.fontFamily.NanumM};
				color: ${cssUnit.colors.White};
				text-decoration-line: none;
			}

			cursor: pointer;
		} */

		@media screen and (max-width: 1200px) {
			width: 80%;
		}
	}
	.subTitle {
		margin: 10px 0 30px 0;

		color: ${cssUnit.colors.DarkGold};
		font-family: ${cssUnit.fontFamily.GothicAi};
		font-size: ${cssUnit.fontSize.medium};
		font-weight: 600;

		list-style: none;
		position: relative;

		overflow-x: hidden;
		width: 100%;
	}
	.col-1 {
		margin: 0 auto;
		margin-bottom: 10px;

		padding: 50px;

		//border: solid 1px aliceblue;
		background-color: ${cssUnit.colors.LightGray};

		//border: dotted 2px gray;
		border-bottom: dotted 1px gray;
		border-top: dotted 2px gray;

		font-family: ${cssUnit.fontFamily.NanumM};
		font-weight: 600;
		line-height: 150%;
		text-align: justify;
		color: ${cssUnit.colors.DeepBlack};

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
		grid-template-columns: 30% 70%;

		div {
			padding: 10px 0 10px 0;
			background-color: ${cssUnit.colors.RealLightGray};
			border: solid 1px aliceblue;
			color: ${cssUnit.colors.DeepBlack};
			overflow: hidden;
			font-weight: 300;
		}
		a {
			//padding: 10px;
			font-weight: 500;
			font-family: ${cssUnit.fontFamily.NanumM};
			color: ${cssUnit.colors.DarkGold};
			text-decoration-line: none;
			//cursor: pointer;
		}

		.rcol {
			background-color: ${cssUnit.colors.DarkGold};
			font-weight: 500;
			color: ${cssUnit.colors.White};
			font-family: ${cssUnit.fontFamily.Hahmlet};
		}

		.rcol-fee {
			background-color: ${cssUnit.colors.Gray};
			font-weight: 500;
			color: ${cssUnit.colors.LightBlack};
			font-family: ${cssUnit.fontFamily.Hahmlet};
		}

		.rcol2-free {
			content: ' ';
			padding: 10px 0 10px 0;
			background-color: ${cssUnit.colors.RealLightGray};
			border: solid 1px aliceblue;
			color: ${cssUnit.colors.DeepBlack};
			overflow: hidden;
			font-weight: 300;
		}

		.rcol2-notFree {
			content: '무료';
			padding: 10px 0 10px 0;
			background-color: ${cssUnit.colors.RealLightGray};
			border: solid 1px aliceblue;
			color: ${cssUnit.colors.DeepBlack};
			overflow: hidden;
			font-weight: 300;
		}
	}

	@media screen and (max-width: 1200px) {
		width: 90%;
	}

	.close {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 30% 70%;
		div {
			padding: 10px 0 10px 0;
			background-color: ${cssUnit.colors.DarkGray};
			//border: solid 1px aliceblue;
			color: ${cssUnit.colors.White};
			overflow: hidden;
			font-weight: 500;
		}
		@media screen and (max-width: 1200px) {
			width: 90%;
		}
	}
	.open {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 30% 70%;
		div {
			padding: 10px 0 10px 0;
			background-color: ${cssUnit.colors.RealLightGray};
			border: solid 1px aliceblue;
			color: ${cssUnit.colors.DeepBlack};
			overflow: hidden;
			font-weight: 500;
		}
		.rcol {
			background-color: ${cssUnit.colors.LightGray};
			font-weight: 500;
			color: ${cssUnit.colors.LightBlack};
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

const Index = ({ item }) => {
	//console.log('index의 item', item);
	useEffect(() => {
		// src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
		if (item === '404') {
			return;
		}
		const kakaosdk = document.createElement('script');
		kakaosdk.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`;
		kakaosdk.defer = true;
		kakaosdk.async = true;
		document.head.appendChild(kakaosdk);
	}, []);

	let ID = null;
	//item이 404인 경우(hocs에서 404로 보낸 경우)
	if (item === '404') {
		return;
	} else {
		//404가 아닌경우
		const router = useRouter();
		ID = router.query.id;
	}
	//const ID = router.query.id;
	// console.log('상세정보 :', item);

	return (
		<IndexStyle>
			<div className='bkgroundColor'>
				<div className='museData'>
					<DetailSlider
						_id={item._id}
						ID={ID}
						imgSrcUrl={item.imgSrcUrl}
						srcName={item.srcName}
						srcUrl={item.srcUrl}
					/>
					<div className='boxContainer'>
						<DataTable_Introduction
							_id={item._id}
							category={item.category}
							description={item.description}
						/>
					</div>
					<div className='boxContainer'>
						<DataTable_Agency
							_id={item._id}
							category={item.category}
							contactInfo={item.contactInfo}
							facilities={item.facilities}
							name={item.name}
							website={item.website}
							newAddress={item.newAddress}
							oldAddress={item.oldAddress}
							runby={item.runby}
							institution={item.institution}
						/>
					</div>
					<div className='boxContainer'>
						<DataTable_Schedule
							mon={item.mon}
							tue={item.tue}
							wed={item.wed}
							thu={item.thu}
							fri={item.fri}
							sat={item.sat}
							sun={item.sun}
							offday={item.offday}
							website={item.website}
						/>
					</div>
					<div className='boxContainer'>
						<DataTable_AdmissionFee
							_id={item._id}
							adultFee={item.adultFee}
							childFee={item.childFee}
							youthFee={item.youthFee}
							isFree={item.isFree}
							feeUrl={item.feeUrl}
						/>
					</div>
					<div className='boxContainer'>
						<KakaoMap
							latitude={item.latitude}
							longitude={item.longitude}
							name={item.name}
						/>
					</div>
				</div>
			</div>
		</IndexStyle>
	);
};

export default Index;
