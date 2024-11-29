/**import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
//import { Button } from "@material-ui/core";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width:100%;
height:90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding:0px 50px;
`;

const Title = styled.h1`
font-weight:200;
`;

const Des = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight:100;
font-size: 30px;
`;

const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display: flex;
justify-content:spce-between;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
font-weight:200;
border-radius:50%;
background-color: ${props => props.color};
margin:0px 5px;
cursor: pointer;
`;

const FilterSize = styled.select`
margin-left:10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius: 10px;
border:1px solid #6b705c;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;

const Button = styled.button`
padding:15px;
border:2px solid #6b705c;
background-color: white;
cursor: pointer;
font-weight:500;
&:hover{
    background-color: #f8f4f4;
}
`;
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://m.media-amazon.com/images/I/71yF-PKsOkL._UY606_.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Crop Tank Top</Title>
                    <Des>Make a statement with this knit top featuring a mock neckline, sleeveless, and a crop straight closure at the hem. This casual yet chic top would look perfect paired with a denim mini skirt, round sunglasses, and ankle booties.</Des>
                    <Price>Rs. 299</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="gray" />

                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>X</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product**/
import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the cart context
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width:100%;
  height:90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding:0px 50px;
`;

const Title = styled.h1`
  font-weight:200;
`;

const Des = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight:100;
  font-size: 30px;
`;

const AddContainer = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
`;

const Amount = styled.span`
  width:30px;
  height:30px;
  border-radius: 10px;
  border:1px solid #6b705c;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;
`;

const Button = styled.button`
  padding:15px;
  border:2px solid #6b705c;
  background-color: white;
  cursor: pointer;
  font-weight:500;
  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
    const { addToCart } = useCart(); // Get the addToCart function from context
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: 1,
        name: "Crop Tank Top",
        description: "Make a statement with this knit top...",
        price: 299,
        color: "black",
        size: "M",
        img: "https://m.media-amazon.com/images/I/71yF-PKsOkL._UY606_.jpg"
    };

    const handleAddToCart = () => {
        const item = { ...product, quantity };
        addToCart(item); // Add the item to the cart
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Des>{product.description}</Des>
                    <Price>Rs. {product.price}</Price>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => setQuantity(quantity + 1)} />
                        </AmountContainer>
                        <Button onClick={handleAddToCart}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
