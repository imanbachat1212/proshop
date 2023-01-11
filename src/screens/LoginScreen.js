import React ,{useState,useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form ,Button,Row,Col, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {login} from '../actions/userActions'

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const location = useLocation()
    const redirect = location.search ?location.search.split('=')[1] : '/'

    const dispatch=useDispatch()
    
    const userLogin=useSelector(state => state.userLogin)
    const {loading,error,userInfo}=userLogin

    const navigate = useNavigate();

    useEffect(()=>{
        if (userInfo){
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])



    const submitHandler=(e)=>{
        e.preventDefault()
        // dispatch login
        dispatch(login(email,password))
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label> Email Address</Form.Label>
                <FormControl
                 type='email'
                 placeholder='Enter email'
                 value={email} 
                 onChange={(e)=> setEmail(e.target.value)}>
                </FormControl>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label> Password</Form.Label>
              <FormControl 
              type='password'
              placeholder='Enter password'
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}>
                </FormControl>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
                Sign In
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
            New Customer ?{ ' '}
             <Link to={redirect?`/register?redirect=${redirect}`:'/register'}>Register</Link>
            </Col>
        </Row>



    </FormContainer>
  )
}

export default LoginScreen