const template_ticket = (name, adultFee, youthFee, childFee, feeUrl) => {
	return `
    <table border="1" bordercolor="blue" width="600" height="300" align="center">
        <tr bgcolor="blue" align="center">
            <p>
                <td colspan="2" span style="color:white">${name} 입장료</td>
            </p>
        </tr>
        <tr align="center" bgcolor="skybule">
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
        <tr align="center" bgcolor="skybule">
            <td colspan="2">상세 확인 url</td>
        </tr>
        <tr align="center">
            <td colspan="2">
                <a target='blank' href=${feeUrl}>${feeUrl}</a>
            </td>
        </tr>
    </table>`;
};
export default template_ticket;
