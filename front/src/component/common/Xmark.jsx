import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

const Xmark = ({ setIsInfoModalOn }) => {
	return (
		<>
			<MarkButton className='closeButton' onClick={() => setIsInfoModalOn(false)}>
				<span>X</span>
			</MarkButton>
		</>
	);
};

export default Xmark;

const MarkButton = styled.button`
	display: inline-block;
	//background-color: #222222;
	color: #997a4c;
	//border: solid 1px #222222;
	//border-radius: 50px;
	//border-color: ${cssUnit.colors.Gray};
	border: 1px solid ${cssUnit.colors.Gray};
	cursor: pointer;
	font-size: 10px;
	font-weight: bold;
	height: 25px;
	outline: 0;

	:hover {
		background-color: ${cssUnit.colors.Black};
		color: ${cssUnit.colors.LightGold};
	}

	@media screen and (max-width: 650px) {
		height: 20px;
	}
`;
