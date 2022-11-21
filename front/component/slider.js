import styled from '@emotion/styled'
import Image from 'next/image'
import {useRouter} from 'next/router'
// import logo from '../public/images/siteLogo.png'

const SliderLayout = styled.div`

    display:flex;
    justify-content: center;

    background-color: gray;
    color: white;
    // border:solid 1px;
    width:100%;
    height:1000px;

    .sliderBox{
        position:relative;
        background-color: black;
        color:black;
        margin-top:100px;
        margin-bottom:100px;
        width:1000px;
        height:800px;
        text-align:center;

        .imgBox{
            position:absolute;
            margin-left:100px;
            margin-top:50px;
            width:800px;
            height:700px;
            background-color:blue;
            &:hover{
                cursor: pointer;
            }
        }

        .sliderTitle{
            position:relative;
            color:white;
            top:150px;
            color:white
            z-index:3;
        }

        .emptyBox1{
            position:absolute;
            background-color:black;
            z-index:2;
            width:100%;
            height:150px;
        }
        .emptyBox2{
            position:absolute;
            background-color:black;
            z-index:2;
            width:100%;
            height:150px;
            top:650px;
        }

`

export default function Slider() {

    const imgSrc = 'https://www.museum.go.kr/ux/content/images/intro/temp/img_mobile_intro_bg02.jpg'
    const router = useRouter();
    const id = 1;

	return (
		<SliderLayout>
            
            <div className='sliderBox'>
                
                <div className='emptyBox1'></div>
                <div className='emptyBox2'></div>
                <div className='imgBox'>
                    
                    <Image
                        className='sliderImg'
                        onClick={()=>router.push(`/sub/${id}`)}
                        src={imgSrc}
                        alt="img"

                        layout='fill'
                        objectFit='contain'
                        unoptimized={true}
                    />
                </div>
                <p className='sliderTitle'>국립중앙박물관</p>
            </div>
		</SliderLayout>
	)
}

