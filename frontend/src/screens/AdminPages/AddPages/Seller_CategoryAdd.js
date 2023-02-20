import React,{ useEffect, useState } from 'react'
import MainScreen from '../../../components/MainScreen/MainScreen'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import data from '../../../data/data'

const Seller_CategoryAdd = () => {

  return (
    <MainScreen title="Welcome Piumi,Add your category here">
         Add Category<br/>
        <Link to='/sellerCategoryAll'>
        <Button  className='mt-4 mb-5'>
          View Category
        </Button>
      </Link>

    </MainScreen>
  )
}

export default Seller_CategoryAdd