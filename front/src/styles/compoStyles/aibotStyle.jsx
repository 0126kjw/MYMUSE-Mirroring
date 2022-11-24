import styled from '@emotion/styled';

import cssUnit from 'lib/cssUnit';
//background-color: ${cssUnit.colors.DarkGold};
const AiBotLayout = styled.div`
	position: fixed;
	right: 30px;
	bottom: 30px;

	.Aibot {
		width: 100px;
		height: 100px;
		background-color: ${cssUnit.colors.DarkGold};
		border: solid 0.5px;
		border-radius: 50%;

		line-height: 100px;
		text-align: center;
		justify-content: center;

		font-size: ${cssUnit.fontSize.medium};
		font-weight: bold;

		&:hover {
			cursor: pointer;
		}
	}
`;

export default AiBotLayout;
