/**import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons';
import { mobile } from "../responsive";
import Footer from '../components/Footer';

const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
font-width: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
padding: 20px;
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0px 10px;

`;
const TopButton = styled.button`
padding: 10px;
font-weight:600;
cursor:pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })} 
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width: 200px;

`;
const Details = styled.div`
padding: 20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
background-color: #333d29;
border:none;
height:1px;

`;
const Summary = styled.div`
flex:1;
border: 0.5px solid #333d29;
border-radius: 10px;
padding:20px;
height:60vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props => props.type === "total" && "500"};
font-size:${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
padding: 10px;
background-color:black;
color:white;
font-weight:600;
`;
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 1234567
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Rs. 300</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg " />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 1234567
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Rs. 300</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. 600</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rs. 650</SummaryItemPrice>
                        </SummaryItem>
                        <Button>PAY NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart**/

import React from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { useCart } from '../context/CartContext'; // Import the cart context
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #333d29;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #333d29;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const { cartItems } = useCart(); // Get cart items from context

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cartItems.length})</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <Product key={index}>
                                    <ProductDetail>
                                        <Image src={item.img} />
                                        <Details>
                                            <ProductName>
                                                <b>Product:</b> {item.name}
                                            </ProductName>
                                            <ProductId>
                                                <b>ID:</b> {item.id}
                                            </ProductId>
                                            <ProductColor color={item.color} />
                                            <ProductSize>
                                                <b>Size:</b> {item.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>{item.quantity}</ProductAmount>
                                            <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>Rs. {item.price * item.quantity}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                            ))
                        )}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>PAY NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
