import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='navv'>
      <FormControl
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products ...'
        className='pt-2'
      ></FormControl>
      <Button type='submit ' variant='online-success' className='inline'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
