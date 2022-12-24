import { useRouter } from 'next/router';
//styled
import { HeaderContainer, ImageWraper, HeaderUpper } from 'src/styles/compoStyles/headerStyle';

import Image from 'next/legacy/image';
// import Image from 'next/image';
// next/image에서 width 100% 설정 방법을 찾으면 고칠 것

import NavBar from './NavBar';

//images
import logo from '../../../public/images/siteLogo.png';
const bgImgSrc =
	'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80';

const Header = () => {
	const router = useRouter();

	return (
		<>
			<HeaderContainer>
				<ImageWraper className='imageWrapper'>
					<HeaderUpper className='upper'>
						<div className='logoImg'>
							<Image
								onClick={() => router.push('/')}
								src={logo}
								alt='logo'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</HeaderUpper>
					<div className='bgImg'>
						<img onClick={() => router.push('/')} src={bgImgSrc} alt='wallpaper' />
					</div>
				</ImageWraper>
			</HeaderContainer>
			<NavBar />
		</>
	);
};

export default Header;
