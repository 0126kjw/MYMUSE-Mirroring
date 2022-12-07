import DataTable_Introduction from 'src/component/detail/DataTable_Introduction';
import DataTable_Agency from 'src/component/detail/DataTable_Agency';
import DataTable_Schedule from 'src/component/detail/DataTable_Schedule';
import DataTable_AdmissionFee from 'src/component/detail/DataTable_AdmissionFee';
import styled from '@emotion/styled';
import DetailSlider from './DetailSlider';
import KakaoMap from './KakaoMap';
import { useRouter } from 'next/router';
import { clearConfigCache } from 'prettier';

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

const Index = ({ item }) => {
	const router = useRouter();
	const ID = router.query.id;
	console.log(item);

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
							description={item.description}
							name={item.name}
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
