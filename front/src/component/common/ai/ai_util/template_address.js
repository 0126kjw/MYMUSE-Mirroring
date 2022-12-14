const facilityAddressTemp = (name, newAddress, oldAddress) => {
	return `
    <table border="1" bordercolor="brown" width="600" height="200" align="center">
        <tr bgcolor="#D9BC8C" align="center">
            <p>
                <td colspan="3" span style="color:black; font-weight:bold">${name} 주소</td>
            </p>
        </tr>
        <tr align="center" bgcolor="beige">
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
