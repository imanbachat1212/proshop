import React ,{useState,useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form ,Button,Row,Col, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../actions/userActions'

const RegisterScreen = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')
    const [message,setMessage]=useState(null)//


    const location = useLocation()
    const redirect = location.search ?location.search.split('=')[1] : '/'

    const dispatch=useDispatch()

    const userRegister=useSelector(state => state.userRegister)

    //hol jebbnehon men userReducer (3ena loading ,userinfo,error)
    const {loading,error,userInfo}=userRegister

    const navigate = useNavigate();

    useEffect(()=>{
        if (userInfo){
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])



    const submitHandler=(e)=>{
        e.preventDefault()
        if (password!== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name,email,password))
        }
 
    }
  return (
    <FormContainer>
        <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label> Name </Form.Label>
                <FormControl
                 type='name'
                 placeholder='Enter name'
                 value={name} 
                 onChange={(e)=> setName(e.target.value)}>
                </FormControl>
            </Form.Group>






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

            <Form.Group controlId='confirmpassword'>
              <Form.Label>  Confirm Password</Form.Label>
              <FormControl 
              type='password'
              placeholder=' Confirm password'
              value={confirmPassword} 
              onChange={(e)=> setconfirmPassword(e.target.value)}>
                </FormControl>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
                Register
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
           Have an Account ?{ ' '}
             <Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Login</Link>
            </Col>
        </Row>



    </FormContainer>
  )
}

export default RegisterScreen