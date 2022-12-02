import styled from '@emotion/styled';

import cssUnit from 'src/lib/cssUnit';
//background-color: ${cssUnit.colors.DarkGold};
const AiBotLayout = styled.div`
	position: fixed;
	right: 30px;
	bottom: 30px;

	.Aibot {
		justify-content: center;

		width: 100px;
		height: 100px;

		background-color: ${cssUnit.colors.DarkGold};
		/* border: solid 0.5px; */
		border-radius: 50%;

		line-height: 100px;
		text-align: center;

		font-size: ${cssUnit.fontSize.medium};
		font-weight: bold;

		//footer issue
		z-index: 1;

		&:hover {
			cursor: pointer;
		}
	}
`;

export default AiBotLayout;
