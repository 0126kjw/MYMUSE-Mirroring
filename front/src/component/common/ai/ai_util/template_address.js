const facilityAddressTemp = (name, newAddress, oldAddress) => {
	return `
    <table border="1" bordercolor="#676767" max-width="400" height="200" align="center" style="border-collapse:collapse;" >
        <tr bgcolor="#997A4C" align="center">
            <p>
                <td colspan="3" style="color:white; font-weight:bold">${name} 주소</td>
            </p>
        </tr>
        <tr align="center" bgcolor="#E5D3B8">
            <td>분류</td>
            <td>내용</td>
        </tr>
        <tr align="center">
            <td>도로명 주소</td>
            <td>${newAddress}</td>
        </tr>
        <tr align="center">
            <td>지번 주소</td>
            <td>${oldAddress}</td>
        </tr>
    </table>`;
};
export default facilityAddressTemp;
