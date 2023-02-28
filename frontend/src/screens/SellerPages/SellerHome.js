import React from 'react'
import AdminHeaderBar from '../AdminPages/AdminHeaderBar'
import AdminSideBar from '../AdminPages/AdminSideBar'
import SellerAdd from '../AdminPages/AddPages/Seller_CategoryAdd'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import {Card,Button} from 'react-bootstrap';

const SellerHome = () => {
  return (
    <div>
              <div class="container-fluid">
    <div class="row flex-nowrap">
        <div style={{backgroundColor:'#39ac73'}} class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100">
             
                <img src="https://github.com/mdo.png" alt="hugenerd" width="100" height="100" class="mx-3 rounded-circle"/>
                <hr style={{
                      width:'100%',
                      backgroundColor:'#ffffff',
                      border: '2px solid #ffffff'
                }}/>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item" style={{color:'#ffffff'}}>
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house text-light"></i> <span class="ms-1 d-none d-sm-inline text-light" >Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2 text-light"></i> <span class="text-light ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            {/* <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline" >Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li> */}
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="text-light fs-4 bi-table"></i> <span class="text-light ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="text-light fs-4 bi-bootstrap"></i> <span class="text-light ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            {/* <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="text-light d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="text-light d-none d-sm-inline">Item</span> 2</a>
                            </li> */}
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 "> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Customers</span> </a>
                    </li>
                </ul>
            </div>
        </div>
        
        
            <SellerAdd />
        
    </div>
</div>

    </div>
  )
}

export default SellerHome