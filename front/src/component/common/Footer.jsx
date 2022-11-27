import Image from 'next/image';
import {
	FooterContainer,
	FooterWrapper,
	FooterTitleBox,
} from 'styles/compoStyles/footerStyle';
import logo from '../../../public/images/siteLogo.png';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterWrapper>
					<FooterTitleBox>
						{/* <Image src={logo} art='logo' /> */}
						<div className='logoImg'>
							<Image
								src={logo}
								alt='logo'
								layout='fill'
								objectFit='contain'
								unoptimized={true}
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
