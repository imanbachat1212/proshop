import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {Form ,Button, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippindAddress } from '../actions/cartActions'

const ShippingScreen = () => {

    const cart=useSelector((state)=> state.cart)
    const {shippingAddress}=cart
    const [address,setAddress]=useState(shippingAddress.address)
    const [city,setCity]=useState(shippingAddress.city)
    const [postalCode,setPostalCode]=useState(shippingAddress.postalCode)
    const [country,setCountry]=useState(shippingAddress.country)

    const navigate=useNavigate();
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
       dispatch(saveShippindAddress({address,city,postalCode,country}))
        
         navigate('/payment')

   
    }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1> Shipping</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
                <Form.Label> Address </Form.Label>
                <FormControl
                 type='text'
                 placeholder='Enter address'
                 value={address} 
                 required
                 onChange={(e)=> setAddress(e.target.value)}>
                </FormControl>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label> City </Form.Label>
                <FormControl
                 type='text'
                 placeholder='Enter city'
                 value={city} 
                 required
                 onChange={(e)=> setCity(e.target.value)}>
                </FormControl>
            </Form.Group>


            <Form.Group controlId='postalCode'>
                <Form.Label> Postal Code </Form.Label>
                <FormControl
                 type='text'
                 placeholder='Enter postal Code'
                 value={postalCode} 
                 required
                 onChange={(e)=> setPostalCode(e.target.value)}>
                </FormControl>
            </Form.Group>


            <Form.Group controlId='country'>
                <Form.Label> Country </Form.Label>
                <FormControl
                 type='text'
                 placeholder='Enter your country'
                 value={country} 
                 required
                 onChange={(e)=> setCountry(e.target.value)}>
                </FormControl>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'> Continue</Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen