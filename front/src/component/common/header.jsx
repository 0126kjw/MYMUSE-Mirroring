import styled from '@emotion/styled';
import NavBar from './NavBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import asdf from '/front/public/images/wallpaper.png'
import logo from '../../../public/images/siteLogo.png';
import cssUnit from 'lib/cssUnit';

const HeaderLayout = styled.div`
	position: relative;
	background-color: ${cssUnit.backgroundColors.Black};
	border: solid 1px;
	width: 100%;
	height: 250px;

	.logoImg {
		position: absolute;
		width: 300px;
		height: 100px;
		top: 90px;
		z-index: 2;
		&:hover {
			cursor: pointer;
		}
	}

	.bgImg {
		position: relative;
		width: 100%;
		height: 200px;
		filter: brightness(50%);
		z-index: 1;
		&:hover {
			cursor: pointer;
		}
	}
`;

const Header = () => {
	const bgImgSrc =
		'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80';

	const router = useRouter();

	return (
		<>
			<HeaderLayout>
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

				<div className='bgImg'>
					<Image
						onClick={() => router.push('/')}
						src={bgImgSrc}
						alt='wallpaper'
						layout='fill'
						objectFit='none'
						unoptimized={true}
					/>
				</div>

				<NavBar />
			</HeaderLayout>
		</>
	);
};

export default Header;
