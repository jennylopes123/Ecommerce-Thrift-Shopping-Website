import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
height:60vh;
bacground-color: #fcf5f5;
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;
padding:20px;
`;
const Title = styled.h1`
font-size: 70 px;
margin-bottom: 20 px;
`;
const Des = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content: space-between;
border:1px solid lightgray;
`;
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
border:none;
background-color:#6b705c;
color:white;
`;
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Des>Get timely update from your favorite product.</Des>
            <InputContainer>
                <Input placeholder="your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter