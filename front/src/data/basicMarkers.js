// export const markers = [
// 	{ markerOffset: 15, name: '도봉', coordinates: [127.036, 37.674] },
// 	{ markerOffset: 15, name: '노원', coordinates: [127.075, 37.674] },
// 	{ markerOffset: 15, name: '강북', coordinates: [127.015, 37.647] },
// 	{ markerOffset: 15, name: '성북', coordinates: [127.015, 37.615] },
// 	{ markerOffset: 15, name: '종로', coordinates: [126.985, 37.593] },
// 	{ markerOffset: 15, name: '중', coordinates: [126.996, 37.57] },
// 	{ markerOffset: 15, name: '용산', coordinates: [126.982, 37.543] },
// 	{ markerOffset: 15, name: '마포', coordinates: [126.915, 37.565] },
// 	{ markerOffset: 15, name: '서대문', coordinates: [126.937, 37.585] },
// 	{ markerOffset: 15, name: '은평', coordinates: [126.93, 37.63] },
// 	{ markerOffset: 15, name: '중랑', coordinates: [127.095, 37.615] },
// 	{ markerOffset: 15, name: '동대문', coordinates: [127.057, 37.593] },
// 	{ markerOffset: 15, name: '성동', coordinates: [127.043, 37.562] },
// 	{ markerOffset: 15, name: '광진', coordinates: [127.092, 37.562] },
// 	{ markerOffset: 15, name: '강동', coordinates: [127.144, 37.562] },
// 	{ markerOffset: 15, name: '송파', coordinates: [127.11, 37.522] },
// 	{ markerOffset: 15, name: '강남', coordinates: [127.05, 37.512] },
// 	{ markerOffset: 15, name: '서초', coordinates: [127.007, 37.508] },
// 	{ markerOffset: 15, name: '동작', coordinates: [126.955, 37.514] },
// 	{ markerOffset: 15, name: '관악', coordinates: [126.952, 37.48] },
// 	{ markerOffset: 15, name: '금천', coordinates: [126.903, 37.475] },
// 	{ markerOffset: 15, name: '구로', coordinates: [126.85, 37.505] },
// 	{ markerOffset: 15, name: '양천', coordinates: [126.855, 37.529] },
// 	{ markerOffset: 15, name: '영등포', coordinates: [126.915, 37.537] },
// 	{ markerOffset: 15, name: '강서', coordinates: [126.825, 37.57] },
// ]

export const markers = [
	{ name: '도봉', coordinates: [127.036, 37.659] },
	{ name: '노원', coordinates: [127.075, 37.659] },
	{ name: '강북', coordinates: [127.015, 37.632] },
	{ name: '성북', coordinates: [127.015, 37.595] },
	{ name: '종로', coordinates: [126.985, 37.575] },
	{ name: '중', coordinates: [126.996, 37.555] },
	{ name: '용산', coordinates: [126.982, 37.528] },
	{ name: '마포', coordinates: [126.915, 37.55] },
	{ name: '서대문', coordinates: [126.937, 37.57] },
	{ name: '은평', coordinates: [126.93, 37.615] },
	{ name: '중랑', coordinates: [127.095, 37.6] },
	{ name: '동대문', coordinates: [127.057, 37.576] },
	{ name: '성동', coordinates: [127.043, 37.547] },
	{ name: '광진', coordinates: [127.092, 37.547] },
	{ name: '강동', coordinates: [127.144, 37.547] },
	{ name: '송파', coordinates: [127.11, 37.507] },
	{ name: '강남', coordinates: [127.05, 37.497] },
	{ name: '서초', coordinates: [127.007, 37.493] },
	{ name: '동작', coordinates: [126.955, 37.497] },
	{ name: '관악', coordinates: [126.952, 37.465] },
	{ name: '금천', coordinates: [126.9, 37.46] },
	{ name: '구로', coordinates: [126.85, 37.49] },
	{ name: '양천', coordinates: [126.855, 37.514] },
	{ name: '영등포', coordinates: [126.915, 37.522] },
	{ name: '강서', coordinates: [126.825, 37.555] },
]

export const markers_gangNam = [
	{
		markerOffsetX: 1.5,
		markerOffsetY: -7,
		name: '국립중앙박물관',
		coordinates: [127.04, 37.487],
	},
	// {  markerOffsetX:1.5, markerOffsetY:-7, name: '전시관2', coordinates: [127.050, 37.497] },
	// {  markerOffsetX:1.5, markerOffsetY:-7, name: '전시관3', coordinates: [127.060, 37.507] },
]

export const museum_pin = (
	<g
		transform='translate(0.000000, 0.000000) scale(0.0020000,-0.0020000)'
		fill='#000000'
	>
		<path
			d='M506 1264 c-417 -90 -627 -557 -418 -934 46 -83 159 -196 242 -242
            186 -103 407 -110 594 -18 230 114 372 362 352 618 -12 157 -76 294 -191 408
            -153 151 -366 213 -579 168z m317 -325 c105 -53 177 -96 177 -105 0 -12 -54
            -14 -361 -14 -338 0 -360 1 -357 18 2 11 63 47 178 104 96 47 177 87 181 87 3
            1 85 -40 182 -90z m137 -174 c0 -12 -17 -15 -93 -15 -52 0 -196 -3 -320 -7
            l-227 -6 0 21 0 22 320 0 c278 0 320 -2 320 -15z m-500 -147 c0 -51 3 -123 7
            -160 l6 -68 -42 0 -41 0 0 160 0 160 35 0 35 0 0 -92z m150 -68 l0 -160 -40 0
            -40 0 0 160 0 160 40 0 40 0 0 -160z m140 0 l0 -160 -40 0 -40 0 0 160 0 160
            40 0 40 0 0 -160z m140 0 l0 -160 -35 0 -35 0 0 160 0 160 35 0 35 0 0 -160z
            m70 -210 c0 -13 7 -20 20 -20 11 0 20 -7 20 -15 0 -8 7 -15 15 -15 8 0 15 -9
            15 -20 0 -21 -9 -21 -717 -25 -58 0 -68 3 -71 18 -3 12 4 20 17 24 12 3 21 12
            21 19 0 8 9 14 20 14 13 0 20 7 20 20 0 20 7 20 320 20 313 0 320 0 320 -20z'
		/>
	</g>
)
