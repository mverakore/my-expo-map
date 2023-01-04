import styled from "styled-components"

const StyledFooter = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #2fc6d0;
color:white;
`

export default function Footer() {
    return (<StyledFooter>
        <h3>Safe Travels</h3>
        mymap.com
    </StyledFooter>)
}