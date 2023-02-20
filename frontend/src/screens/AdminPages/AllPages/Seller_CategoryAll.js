import React,{ useEffect, useState } from 'react'
import MainScreen from '../../../components/MainScreen/MainScreen'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import data from '../../../data/data'

const Seller_CategoryAll = () => {

    const [category,setCategory] = useState([]);

    const fetchCategory = async() =>{
      const {data} = await axios.get('/api/category');
      setCategory(data); 
    }
    // console.log(data);
  
    useEffect(() => {
      fetchCategory();
    }, [ ])
    
    const deleteHandler = (id) =>{
      if(window.confirm('Are You Sure')){
  
      }
    }

  return (
    <div>
         <MainScreen title="Welcome Piumi, See and Change your category here">
         All Category<br/>
        <Link to='/sellerCategoryAdd'>
        <Button  className='mt-4 mb-5'>
          Create New Category
        </Button>
      </Link>

      {
         data.map(data =>(
          <Accordion key= {data._id}>
          <Card className='mb-5'>
          <Card.Header as="h5">{data.title}</Card.Header>
          <Card.Body>
            <Card.Title>{data.content}</Card.Title>
            <Card.Text>
              {data.category}
            </Card.Text>
            <Button href={`/category/${data._id}`} className='mx-5' variant="primary">Edit</Button>
            <Button variant="danger" onClick={()=> deleteHandler(data._id)}>Delete</Button>
          </Card.Body>
        </Card>
        </Accordion>
        ))
      }
    </MainScreen>
    </div>
  )
}

export default Seller_CategoryAll