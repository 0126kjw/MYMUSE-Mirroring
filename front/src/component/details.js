import styled from '@emotion/styled'

const DetailsLayout = styled.div`
    background-color: black;
    display:flex;
    padding-top:30px;
    justify-content: center;
    color:white;
    border:solid 1px;
    width:100%;
    height:500px;
`

export default function Details({id}) {
    
    console.log({id})
    
	return (
        <>
            <DetailsLayout>
                <p> 전시관 {id} 상세 설명  </p>
            </DetailsLayout>
        </>

	)
}
