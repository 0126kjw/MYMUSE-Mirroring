// fontSize, color unit
// import 해서 사용
//ex) //background-color: ${cssUnit.colors.DarkGold};

const cssUnit = {
	fontSize: {
		title: '40px',
		large: '32px',
		medium: '24px',
		normal: '18px',
		small: '16px',
		xsmall: '6px',
	},

	fontWeight: {
		bold: 'bold',
	},

	colors: {
		Black: '#222222',
		LightBlack: '#2D2D2D',

		DarkGray: '#676767',
		Gray: '#CCCCCC',

		White: '#FAFAFA',

		DarkGold: '#997A4C',
	},

	backgroundColors: {
		Black: '#222222',
		LightBlack: '#2D2D2D',
		Gray: '#CCCCCC',

		White: '#FAFAFA',
	},
};

export default cssUnit;
