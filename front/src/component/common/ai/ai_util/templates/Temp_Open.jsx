// 경운박물관 오픈시간
import styled from '@emotion/styled';

const Temp_Open = (guide, name, mon, tue, wed, thu, fri, sat, sun, offday) => {
	const TableLayout = styled.div`
		table {
			background-color: #997a4c;
			border: 1px black solid;
			border-color: #676767;
			/* height: 400px; */
			text-align: center;
			border-collapse: collapse;
		}
		td {
			border: 1px solid #444444;
		}

		.tr-title {
			background-color: #997a4c;
			text-align: center;
			color: white;
			font-weight: bold;
		}

		.tr-subtitle {
			text-align: center;
			background-color: #e5d3b8;
		}
		.tr-content {
			background-color: white;
			color: black;
		}
	`;

	return (
		<>
			<div className='msgFromAI'>{guide}</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<TableLayout>
					<table>
						<tr className='tr-title'>
							<td colSpan='2'>{name} 요일별 운영시간</td>
						</tr>
						<tr className='tr-subtitle'>
							<td>요일</td>
							<td>운영시간</td>
						</tr>
						<tr className='tr-content'>
							<td>월요일</td>
							<td>{mon}</td>
						</tr>
						<tr className='tr-content'>
							<td>화요일</td>
							<td>{tue}</td>
						</tr>
						<tr className='tr-content'>
							<td>수요일</td>
							<td>{wed}</td>
						</tr>
						<tr className='tr-content'>
							<td>목요일</td>
							<td>{thu}</td>
						</tr>
						<tr className='tr-content'>
							<td>금요일</td>
							<td>{fri}</td>
						</tr>
						<tr className='tr-content'>
							<td>토요일</td>
							<td>{sat}</td>
						</tr>
						<tr className='tr-content'>
							<td>일요일</td>
							<td>{sun}</td>
						</tr>
						<tr className='tr-subtitle'>
							<td colSpan='2'>기타 휴관일정보</td>
						</tr>
						<tr className='tr-content'>
							<td colSpan='2'>{offday}</td>
						</tr>
					</table>
				</TableLayout>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Temp_Open;
