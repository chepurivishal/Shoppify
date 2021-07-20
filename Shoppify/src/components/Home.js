import React, {useState, useEffect} from "react";
import {
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Navbar, 
    NavbarBrand, 
    NavbarText,
    Card,
    Button,
    Row,
    Col,
    Container
} from 'reactstrap'
const _ = require("lodash");

const Home = props => {
    
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [tab, setTab] = useState('home');

    useEffect(() => {
        setProducts([
            {
                "_id": "dress1",
                "title": "Dress 1",
                "image": "/home/sunnyadappa/Sunny/int1/shoppify/src/asserts/dress1.jpeg",
                "description": "About this dress",
                "prince": 300,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress2",
                "title": "Dress 2",
                "image": "images/dress2.jpeg",
                "description": "About this dress",
                "prince": 250,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress3",
                "title": "Dress 3",
                "image": "images/dress3.jpeg",
                "description": "About this dress",
                "prince": 350,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress4",
                "title": "Dress 4",
                "image": "images/dress4.jpeg",
                "description": "About this dress",
                "prince": 600,
                "availableSizes": ["S", "M", "L", "XL"]
            }
        ]);
    }, []);

    const addProductToCart = product => {
        setCartProducts([...cartProducts, product]);
        alert("Added Product to Cart Successfuly");
    };

    const removeProductFromCart = product => {
        let _products = _.clone(cartProducts);
        _.remove(_products, pro => {
            return pro._id === product._id;
        });
        setCartProducts(_products);
        alert("Removed From Cart Successfuly");
    };

    const Cart = props => {
        return (
            <Row>
                <React.Fragment>
                    {
                        cartProducts.length === 0 ? 
                        <center>
                            <h1>Cart is Empty</h1>
                        </center>
                        :
                        (
                            cartProducts.map(product => {
                                return (
                                    <Col sm="3">
                                        <Card>
                                            <CardImg top width="100%" src={product.image}></CardImg>
                                            <CardBody>
                                                <CardTitle>
                                                    {product.title}
                                                </CardTitle>
                                                <CardText>{product.description}</CardText>
                                                <CardSubtitle>{product.prince} Rs</CardSubtitle>
                                                <Button outline color="danger" onClick={() => removeProductFromCart(product)}>Remove From Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })
                        )
                    }
                </React.Fragment>
            </Row>
        );
    };

    const Products = props => {
        return (
            <React.Fragment>
                {
                    products.length === 0 ?
                    <Row>
                        <center>
                            <h1>No products Available</h1>
                        </center>
                    </Row>
                    :
        
                    (
                        <Row>
                            {products.map(product => {
                                return (
                                    <Col sm="3">
                                        <Card>
                                            <CardImg top width="100%" src={product.image}></CardImg>
                                            <CardBody>
                                                <CardTitle>
                                                    {product.title}
                                                </CardTitle>
                                                <CardText>{product.description}</CardText>
                                                <CardSubtitle>{product.prince} Rs</CardSubtitle>
                                                <Button outline color="info" onClick={() => addProductToCart(product)}>Add To Card</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    )
                }
            </React.Fragment>
        )

    }

    return (
        <React.Fragment>

            {/* Header */}
            <Navbar color="info" light expand="md">
                <NavbarBrand href="/">Shoppify.com</NavbarBrand>
                <Row>
                    <Col>
                        <Button color="success" onClick = {() => setTab("cart")}>Cart</Button>
                    </Col>
                    <Col>
                        <Button color="success" onClick = {() => setTab("home")}>Home</Button>
                    </Col>
                </Row>
            </Navbar>

            <br/>
            
            <Container>
                {
                    tab === "home"? <Products/> : <Cart/>
                }
            </Container>

        </React.Fragment>  
    );
};

export default Home;