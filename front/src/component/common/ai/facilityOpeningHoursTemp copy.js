const facilityOpeningHoursTemp = (name, mon, tue, wed, thu, fri, sat, sun, offday) => {
	return `
    <table border="1" bordercolor="blue" width="500" height="300" align="center">
    <tr bgcolor="blue" align="center">
        <p>
            <td colspan="2" span style="color:white">${name} 요일별 운영시간</td>
        </p>
    </tr>
    <tr align="center" bgcolor="skybule">
        <td>요일</td>
        <td>운영시간</td>
    </tr>
    <tr>
        <td>월요일</td>
        <td>${mon}</td>
    </tr>
    <tr>
        <td>화요일</td>
        <td>${tue}</td>
    </tr>
    <tr>
        <td>수요일</td>
        <td>${wed}</td>
    </tr>
    <tr>
        <td>목요일</td>
        <td>${thu}</td>
    </tr>
    <tr>
        <td>금요일</td>
        <td>${fri}</td>
    </tr>
    <tr>
        <td>토요일</td>
        <td>${sat}</td>
    </tr>
    <tr>
        <td>일요일</td>
        <td>${sun}</td>
    </tr>
    <tr bgcolor="blue" align="center">
        <p>
            <td colspan="2" span style="color:white">기타 휴관일정보</td>
        </p>
    </tr>

    <tr>
        <td colspan="2">${offday}</td>
    </tr>
</table>
    `;
};

export default facilityOpeningHoursTemp;
