import styled from '@emotion/styled';

// 경운박물관 주소
const Temp_Addr = (guide, name, newAddress, oldAddress) => {
	const TableLayout = styled.div`
		table {
			background-color: #997a4c;
			border: 1px black solid;
			border-color: #676767;
			/* height: 200px; */
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
							<td colSpan='2'>{name} 주소</td>
						</tr>
						<tr className='tr-subtitle'>
							<td>분류</td>
							<td>내용</td>
						</tr>
						<tr className='tr-content'>
							<td>도로명</td>
							<td>{newAddress}</td>
						</tr>
						<tr className='tr-content'>
							<td>지번</td>
							<td>{oldAddress}</td>
						</tr>
					</table>
				</TableLayout>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Temp_Addr;
