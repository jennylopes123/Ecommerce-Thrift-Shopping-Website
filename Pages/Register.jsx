import styled from "styled-components"
import { mobile } from "../responsive";
const Container = styled.div`
width:100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`;
const Wrapper = styled.div`
width:40%;
padding: 20px;
background-color: #a99985;
border-radius: 10px;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
display: flex;
align-items:center;
justify-content:center;
font-size: 24px;
font-weight:300;
`;
const Form = styled.form`
display:flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
display: flex;
align-items:center;
justify-content:center;
width: 40%;
border: none;
padding: 15px 20px;
background-color: #252323;
color: white;
cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>. Happy Shopping!
                    </Agreement>
                    <Button>
                        CREATE
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
