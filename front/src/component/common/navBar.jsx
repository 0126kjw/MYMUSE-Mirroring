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
`;

const NavBarLayout = styled.div`
	ul {
		margin: 0px;
		width: 1200px;

		padding-left: 0px;
		display: flex;
		justify-content: space-around;
		background-color: ${cssUnit.backgroundColors.Black};
		height: 50px;
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
						<Link href='/sub/zido'>
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
