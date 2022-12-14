//hamburger menu for mobile
import styled from '@emotion/styled';
import Link from 'next/link';
import cssUnit from 'src/lib/cssUnit';

//recoil
import { currentLoc } from 'src/state/navibar';
import { useRecoilValue } from 'recoil';

const MenuTogglerLayout = styled.div`
	//position: absolute;
	position: fixed;

	// width: 100vw;
	// height: 100vh;

	z-index: 10;

	#menuToggle {
		display: block;
		position: relative;
		top: 45px;
		left: 55%;
		z-index: 100;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		//position: fixed;
	}

	#menuToggle a {
		text-decoration: none;
		color: ${cssUnit.colors.DeepBlack};

		transition: color 0.3s ease;

		//selected loc
		.selectedColor {
			color: ${cssUnit.colors.DarkGold};
		}

		.defaultColor {
			color: ${cssUnit.colors.DeepBlack};
		}
	}

	#menuToggle a:hover {
		color: ${cssUnit.colors.DarkGold};
	}

	#menuToggle input {
		display: block;
		width: 35px;
		height: 35px;
		position: absolute;
		top: -7px;
		left: -5px;

		cursor: pointer;

		opacity: 0;
		/* hide this */
		z-index: 2;
		/* and place it over the hamburger */
		-webkit-touch-callout: none;
	}

	// hamburger
	#menuToggle span {
		display: block;
		width: 29px;
		height: 4px;
		margin-bottom: 4.5px;
		position: relative;

		background: ${cssUnit.colors.White};
		border-radius: 3px;

		z-index: 1;
		transform-origin: 4.5px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	#menuToggle span:nth-last-of-type(4) {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-of-type(3) {
		transform-origin: 0% 100%;
	}

	// Transform all the slices of hamburger into a crossmark.
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-1.5px, -1.5px);
		background: ${cssUnit.colors.DeepBlack};
	}

	// hide the middle one
	#menuToggle input:checked ~ span:nth-last-of-type(2) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	// last one should go the other direction
	#menuToggle input:checked ~ span:nth-last-of-type(1) {
		transform: rotate(-45deg) translate(0, -1.5px);
	}

	#menu {
		position: absolute;
		width: 200px;
		height: 700px;
		border-radius: 0px 0px 20px 0px;
		margin: -100px 0 0 -50px;
		padding: 50px;
		padding-top: 125px;

		background: #ededed;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transform-origin: 0% 0%;
		transform: translate(-100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	}

	#menu li {
		padding: 10px 0;
		font-size: 25px;
		font-weight: bold;
	}

	// slide it in from the left
	#menuToggle input:checked ~ ul {
		transform: none;
	}

	@media screen and (min-width: 599px) {
		display: none;
	}
`;

const NavBarHBG = () => {
	const loc = useRecoilValue(currentLoc);
	const menu = [
		{ korName: '홈', route: '/' },
		{ korName: '지도', route: '/map' },
		{ korName: '검색', route: '/search' },
		{ korName: '진행중인 전시회', route: '/popular' },
	];

	return (
		<MenuTogglerLayout>
			<div id='menuToggle'>
				<input type='checkbox' />
				<span></span>
				<span></span>
				<span></span>
				<ul id='menu'>
					{menu.map((item, idx) => (
						<Link key={`mbMenu${idx}`} href={item.route}>
							<li className={loc === item.route ? 'selectedColor' : 'defaultColor'}>
								{item.korName}
							</li>
						</Link>
					))}
				</ul>
			</div>
		</MenuTogglerLayout>
	);
};

export default NavBarHBG;
