const facilityOpeningHoursTemp = (name, mon, tue, wed, thu, fri, sat, sun, offday) => {
	return `<table border="1" bordercolor="#676767" max-width="400" height="400" align="center" style="border-collapse:collapse;" >
    <tr bgcolor="#997A4C" align="center">
        <p>
            <td colspan="2" style="color:white; font-weight:bold">${name} 요일별 운영시간</td>
        </p>
    </tr>
    <tr align="center" bgcolor="#E5D3B8">
        <td>요일</td>
        <td>운영시간</td>
    </tr>
    <tr align="center">
        <td>월요일</td>
        <td>${mon}</td>
    </tr>
    <tr align="center">
        <td>화요일</td>
        <td>${tue}</td>
    </tr>
    <tr align="center">
        <td>수요일</td>
        <td>${wed}</td>
    </tr>
    <tr align="center">
        <td>목요일</td>
        <td>${thu}</td>
    </tr>
    <tr align="center">
        <td>금요일</td>
        <td>${fri}</td>
    </tr>
    <tr align="center">
        <td>토요일</td>
        <td>${sat}</td>
    </tr>
    <tr align="center">
        <td>일요일</td>
        <td>${sun}</td>
    </tr>
    <tr bgcolor="#997A4C" align="center">
        <p>
            <td colspan="2" style="color:white; font-weight:bold">기타 휴관일정보</td>
        </p>
    </tr>
    <tr>
        <td colspan="2" align="center">${offday}</td>
    </tr>
</table>
    `;
};

export default facilityOpeningHoursTemp;
