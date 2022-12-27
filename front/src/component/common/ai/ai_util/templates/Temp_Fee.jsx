// 무료 : 경운박물관 입장료
// 유료 : 코리아나화장박물관 입장료
import styled from '@emotion/styled';

const Temp_Fee = (guide, isFree, name, adultFee, youthFee, childFee, feeUrl) => {
	const TableLayout = styled.div`
		table {
			background-color: #997a4c;
			border: 1px black solid;
			border-color: #676767;
			text-align: center;
			border-collapse: collapse;
			/* height: 400px; */
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

	if (isFree == true)
		return (
			<>
				<div className='msgFromAI'>{name}(은/는) 무료입장이 가능합니다.</div>
				<div className='emptyBox'></div>
			</>
		);
	else {
		return (
			<>
				<div className='msgFromAI'>{guide}</div>
				<div className='emptyBox'></div>
				<div className='msgFromAI'>
					<TableLayout>
						<table>
							<tr className='tr-title'>
								<td colSpan='2'>{name} 입장료</td>
							</tr>
							<tr className='tr-subtitle'>
								<td>분류</td>
								<td>내용</td>
							</tr>
							<tr className='tr-content'>
								<td>성인 요금</td>
								<td>{adultFee}</td>
							</tr>
							<tr className='tr-content'>
								<td>청소년 요금</td>
								<td>{youthFee}</td>
							</tr>
							<tr className='tr-content'>
								<td>어린이 요금</td>
								<td>{childFee}</td>
							</tr>
							<tr className='tr-title'>
								<td colSpan='2'>상세 확인 url</td>
							</tr>
							<tr className='tr-content'>
								<td colSpan='2'>
									<a target='blank' href={feeUrl}>
										링크
									</a>
								</td>
							</tr>
						</table>
					</TableLayout>
				</div>
				<div className='emptyBox'></div>
			</>
		);
	}
};
export default Temp_Fee;
