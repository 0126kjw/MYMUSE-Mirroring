import styled from '@emotion/styled';

const FooterLayout = styled.div`
	position: relative;
	background-color: black;
	display: flex;
	padding-top: 30px;
	justify-content: center;
	color: white;
	border: solid 1px;
	width: 100%;
	height: 200px;
`;
const Footer = () => {
	return (
		<>
			<FooterLayout>
				<>footer</>
			</FooterLayout>
		</>
	);
};

export default Footer;
