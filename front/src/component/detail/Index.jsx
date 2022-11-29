import DataTable_Title from 'component/detail/DataTable_Title';
import DataTable_Agency from 'component/detail/DataTable_Agency';
import DataTable_Schedule from 'component/detail/DataTable_Schedule';
import DataTable_AdmissionFee from 'component/detail/DataTable_AdmissionFee';
import NaverMapComp from 'component/detail/NaverMapComp';
import PhotoSlider from 'component/detail/PhotoSlider';
import styled from '@emotion/styled';

const IndexStyle = styled.div`
	.museData {
		background-color: aliceblue;
	}
	.DataDivision {
		width: 1190px;
		border-bottom: solid 3px black;
		border-top: solid 3px black;
		border-right: solid 5px black;
		border-left: solid 5px black;
	}
	.DataSubTitle {
		color: brown;
	}
	.col-1 {
		background-color: lightgray;
		border: solid 1px aliceblue;
		padding: 50px;
		color: black;
	}
	.col-2 {
		display: grid;
		grid-template-columns: 300px 890px;
		div {
			background-color: lightgray;
			border: solid 1px aliceblue;
			color: black;
		}
	}
	.NaverMapCompStyle {
		height: 500px;
		margin: 0 auto;
		border-left: solid 5px black;
		border-right: solid 5px black;
	}
	.PhotoSliderStyle {
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
	return (
		<IndexStyle>
			<div className='museData'>
				<PhotoSlider />
				<DataTable_Title />
				<DataTable_Agency />
				<DataTable_Schedule />
				<DataTable_AdmissionFee />
				<NaverMapComp />
			</div>
		</IndexStyle>
	);
};

export default Index;
