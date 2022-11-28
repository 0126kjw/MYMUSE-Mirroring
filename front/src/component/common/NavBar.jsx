import Link from 'next/link';
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

const NaviContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 50px;

	background-color: ${cssUnit.backgroundColors.Black};

	border-top: 0.1px soild #111111;
`;

const NavBarLayout = styled.div`
	ul {
		display: flex;
		justify-content: space-around;

		width: 1200px;
		height: 50px;

		margin: 0px;

		padding-left: 0px;

		background-color: ${cssUnit.backgroundColors.Black};

		line-height: 50px;

		span {
			color: #ffffff;
		}
		li {
			list-style: none;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;

const NavBar = () => {
	return (
		<NaviContainer>
			<NavBarLayout>
				<ul>
					<li>
						<Link href='/'>
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link href='/sub/map'>
							{' '}
							<span>Map</span>{' '}
						</Link>
					</li>
					<li>
						<Link href='/sub/search'>
							{' '}
							<span>Search</span>{' '}
						</Link>
					</li>

					<li>
						<Link href='/sub/popular'>
							{' '}
							<span>Popular</span>{' '}
						</Link>
					</li>
				</ul>
			</NavBarLayout>
		</NaviContainer>
	);
};

export default NavBar;
