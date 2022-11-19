import styled from '@emotion/styled'

const SliderLayout = styled.div`

    display:flex;
    justify-content: center;

    background-color: gray;
    color: white;
    border:solid 1px;
    width:100%;
    height:300px;
`

export default function Slider() {

	return (
		<SliderLayout>
            <p>전시관 슬라이더</p>
		</SliderLayout>
	)
}
