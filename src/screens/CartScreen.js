import React ,{useEffect}from 'react';
import{Link, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {Row,Col,ListGroup,Image,Button,Card, FormControl} from 'react-bootstrap'
import Message from '../components/Message';
import { addToCart ,removeFromCart } from '../actions/cartActions';



const CartScreen = () => {

  const productId = useParams().id 
  const navigate = useNavigate();
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1//michen tjbli el quanity li 3mltla select ?qty=li 3mltla selet
  const dispatch =useDispatch()

  const cart =useSelector(state => state.cart)
  const {cartItems }=cart
  useEffect(()=>{
    if (productId){
      dispatch(addToCart(productId,qty))
    }
  },[dispatch,productId,qty])

  const removeFromCartHandler=(id) =>{
    dispatch(removeFromCart(id))
  }
  const checkoutHandler =()=>{
    navigate(`/shipping`)
  }
  

  return (
    <Row>
      <Col md={8}>
        <h1> Shopping Cart</h1>
        {cartItems.length === 0 ? 
        <Message> Your cart is empty
          <Link to='/'> Go Back</Link>
        </Message>:(
          <ListGroup variant='flush'>
            {cartItems.map(item=>(
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    < Image src={item.image} alt={item.name} fluid rounded/>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}> ${item.price} </Col>
                  <Col md={2}>
                  <FormControl as='select' value={item.qty} onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))}>
                                {[...Array(item.countInStock).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>
                                            { x + 1 }
                                        </option>
                                    ))}

                   </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button type ='button' variant='light' onClick={()=> removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>                  
                    </Button>
                  </Col>
                </Row>

              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2> SUBTOTAL ({cartItems.reduce((acc,item)=> acc + item.qty , 0)}) ITEMS</h2>
                ${cartItems.reduce((acc, item)=> acc +item.qty *item.price,0).toFixed(2)}  
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>

      </Col>
     

    </Row>
  )
}

export default CartScreen