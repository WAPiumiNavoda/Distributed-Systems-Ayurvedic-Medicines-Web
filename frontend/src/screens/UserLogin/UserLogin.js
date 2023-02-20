import React,{ useState,useEffect } from 'react'
import Row from 'react-bootstrap/esm/Row';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MainScreen from '../../components/MainScreen/MainScreen';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import LoadingPages from '../../components/LoadingPages/LoadingPages';
import ErrorMessages from '../../components/Errormeesages/ErrorMessages';

const UserLogin = ({history}) => {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [error,setError] = useState(false);
 const [loading,setLoading] = useState(false);

// useEffect(()=>{
//     const userInfo = localStorage.getItem("userInfo")

//     if(userInfo){
//       history.push("/adminhome")
//     }
// },[history])

 const submitHandler =async (e)=>{
    e.preventDefault();
    try {
        const config = {
            headers: {
                "Content-type" : "application/json"
            }
        }
        setLoading(true)
        const { data } =await axios.post('/api/users/login', {
            email,
            password
        }, config);
        
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify);
        setLoading(false)
    } catch (error) {
        setError(error.response.data.message)
        setLoading(false)
    }
 }

  return (
    <MainScreen>
    <div className='m-5'>
    {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
    {loading && <LoadingPages />}
    <h1>Login</h1>
    <hr />
    <Form onSubmit={submitHandler}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control 
      type="email" 
      placeholder="Enter email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit" className='p-2'>
    Submit
  </Button>
</Form>
<Row className='my-3'>
    <Col>
     New Customer ? <Link to='/register'>Register Here</Link>
    </Col>
</Row>
</div>
</MainScreen>
  )
}

export default UserLogin