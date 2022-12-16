const template_ticket = (name, adultFee, youthFee, childFee, feeUrl) => {
	return `
    <table border="1" bordercolor="#676767" max-width="400" height="300" align="center" style="border-collapse:collapse;">
        <tr bgcolor="#997A4C" align="center">
            <p>
                <td colspan="2" span style="color:white; font-weight:bold">${name} 입장료</td>
            </p>
        </tr>
        <tr align="center" bgcolor="#E5D3B8">
            <td>분류</td>
            <td>내용</td>
        </tr>
        <tr align="center">
            <td>성인 요금</td>
            <td>${adultFee}</td>
        </tr>
        <tr align="center">
            <td>청소년 요금</td>
            <td>${youthFee}</td>
        </tr>
        <tr align="center">
            <td>어린이 요금</td>
            <td>${childFee}</td>
        </tr>
        <tr align="center" bgcolor="#997A4C">
            <td colspan="2" style='color:white; font-weight:bold'>상세 확인 url</td>
        </tr>
        <tr align="center">
            <td colspan="2">
                <a target='blank' href=${feeUrl}>링크</a>
            </td>
        </tr>
    </table>`;
};
export default template_ticket;
