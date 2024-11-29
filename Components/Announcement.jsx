import styled from "styled-components"

const Container = styled.div` 
height: 30px;
background-color: #333D29;
color: white;
display:flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;
const Announcement = () => {
    return (
        <Container>
            Just Thrift It.
        </Container>
    )
}

export default Announcement
