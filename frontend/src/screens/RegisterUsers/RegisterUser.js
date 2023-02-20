import React,{ useState} from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessages from '../../components/Errormeesages/ErrorMessages';
import LoadingPages from '../../components/LoadingPages/LoadingPages';
import axios from 'axios';

const RegisterUser = () => {

 const [email,setEmail] = useState("");
 const [name,setName]= useState("");
 const [pic,setPic] = useState(null);
 const [password,setPassword]= useState("");
 const [confirmpassword,setConfirmPassword]= useState("");
 const [message,setMessage]= useState(null);
 const [picMessage,setPicMessage]= useState(null); 

 const [loading,setLoading] = useState(false)  
 const [error,setError] = useState(false) 

  const registerHandler= async (e)=>{
    e.preventDefault();

    if(password !== confirmpassword){
       setMessage('Password Do Not Match');
    }else{
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type" :"application/json"
          },
        };

        setLoading(true)

        const { data } = await axios.post(
          "api/users",
          { name,pic,email,password },
          config
        );

        setLoading(false);
        localStorage.setItem("userInfo",JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
    console.log(email,name,pic);
     
  }

  return (
    <MainScreen>
    <hr />
  {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
  {message && <ErrorMessages variant='danger'>{message}</ErrorMessages>}
  {loading && <LoadingPages />}

 <Form onSubmit={ registerHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
     value={name}
    onChange={(e)=> setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email"
     value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password"
     value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Enter confirmed Password"
     value={confirmpassword}
    onChange={(e)=> setConfirmPassword(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Uploard Image</Form.Label>
    <Form.Control type="file"
      value={pic}
      onChange={(e)=> setPic(e.target.value)}
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </MainScreen>
  )
}

export default RegisterUser