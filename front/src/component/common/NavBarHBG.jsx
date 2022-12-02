import styled from '@emotion/styled';
import Link from 'next/link';

const MenuTogglerLayout = styled.div`
	position: absolute;
	// width: 100vw;
	// height: 100vh;

	#menuToggle {
		display: block;
		position: relative;
		top: 40px;
		left: 55%;
		z-index: 1000;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	#menuToggle a {
		text-decoration: none;
		color: #232323;

		transition: color 0.3s ease;
	}

	#menuToggle a:hover {
		color: tomato;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
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
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: #cdcdcd;
		border-radius: 3px;

		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	#menuToggle span:first-of-type {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	// Transform all the slices of hamburger into a crossmark.
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #232323;
	}

	// hide the middle one
	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	// last one should go the other direction
	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
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
	return (
		<MenuTogglerLayout>
			<div id='menuToggle'>
				<input type='checkbox' />
				<span></span>
				<span></span>
				<span></span>
				<ul id='menu'>
					<Link href='/'>
						<li>홈</li>
					</Link>
					<Link href='/map'>
						<li>서울 지도로 찾기</li>
					</Link>
					<Link href='/search'>
						<li>박물관 검색</li>
					</Link>
					<Link href='/popular'>
						<li>진행중인 전시회</li>
					</Link>
				</ul>
			</div>
		</MenuTogglerLayout>
	);
};

export default NavBarHBG;
