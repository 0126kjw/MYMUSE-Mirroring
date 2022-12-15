import Image from 'next/image';
import { FooterContainer, FooterWrapper, FooterTitleBox } from 'src/styles/compoStyles/footerStyle';
import logo from '../../../public/images/siteLogo.png';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterWrapper>
					<FooterTitleBox>
						<div className='logoImg'>
							<Image
								src={logo}
								alt='logo'
								width={300}
								height={44}
								style={{ objectFit: 'contain', layout: 'fill' }}
							/>
						</div>
					</FooterTitleBox>
					<span>Team 9G</span>
				</FooterWrapper>
			</FooterContainer>
		</>
	);
};

export default Footer;
