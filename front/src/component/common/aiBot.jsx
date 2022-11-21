import styled from '@emotion/styled'

const AiBotLayout = styled.div`
    
    position:fixed;
    right:30px;
    bottom:30px;

    .Aibot{
        background-color: orange;
        border:solid 1px;
        width:60px;
        height:60px;
        line-height:60px;
        border-radius:50%;
        text-align:center;
        font-weight:bold;
        &:hover{
            cursor: pointer
        }
    }

`

export default function AiBot() {
	return (
		<AiBotLayout>
            <div className='Aibot'>AI봇</div>
		</AiBotLayout>
	)
}
