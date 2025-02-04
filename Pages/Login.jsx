import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
width:100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width:25%;
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
flex-direction: column;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px ;
padding:10px;
`;

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
border: none;
padding: 15px 20px;
background-color: #252323;
color: white;
cursor: pointer;
margin: 10px;
`;

const Link = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    LOG IN
                </Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>
                        LOG IN
                    </Button>
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
