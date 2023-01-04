import styled from "styled-components"

const TopHeader = styled.div`
width: 100%;
background-color: #2fc6d0;
height: 85px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: White;
position: sticky;
`

export default function Header() {
    return (
        <TopHeader>
            <h1>Vancouver Downtown Expo Line</h1>
        </TopHeader>
    )

}