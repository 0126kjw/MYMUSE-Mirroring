import Link from 'next/link'
import styled from '@emotion/styled'

const NavBarLayout = styled.div`
    ul{
        margin:0px;
        
        padding-left:0px;
        display:flex;
        justify-content: space-around;
        background-color:#404048;
        height:50px;
        line-height:50px;
        
        span{
            color:#FFFFFF;
        }
        li{
            list-style:none;
            &:hover{
                cursor: pointer
            }
        }
    }

`

export default function NavBar() {
	return (
		<NavBarLayout>
			<ul>
				<li><Link href='/'><span>Home</span></Link></li>
				<li><Link href='/sub/search'> <span>Search</span> </Link></li>
				<li><Link href='/sub/zido'> <span>SeoulMap</span> </Link></li>
				<li><Link href='/sub/rank'> <span>Ranking</span> </Link></li>
			</ul>
		</NavBarLayout>
	)
}
