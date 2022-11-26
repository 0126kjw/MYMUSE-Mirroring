//styled
import {
	HeaderContainer,
	HeaderWraper,
	HeaderUpper,
	HeaderTitleBox,
	HeaderLower,
} from 'styles/compoStyles/headerStyle';
import NavBar from './NavBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../public/images/siteLogo.png';

const bgImgSrc =
	'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80';

const Header = () => {
	const router = useRouter();

	return (
		<>
			<HeaderContainer>
				<HeaderWraper>
					<div className='bgImg'>
						<Image
							onClick={() => router.push('/')}
							src={bgImgSrc}
							alt='wallpaper'
							layout='fill'
							objectFit='none'
							unoptimized={true}
						/>
						<HeaderUpper>
							{/* <Image src={logo} art='logo' /> */}
							<div className='logoImg'>
								<Image
									onClick={() => router.push('/')}
									src={logo}
									alt='logo'
									layout='fill'
									objectFit='contain'
									unoptimized={true}
								/>
							</div>
						</HeaderUpper>
						<HeaderLower />
					</div>
				</HeaderWraper>
				<NavBar />
			</HeaderContainer>
		</>
	);
};

export default Header;
