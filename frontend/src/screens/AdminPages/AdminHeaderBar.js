import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

const AdminHeaderBar = () => {
  return (
    <div>
          <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href="">V-Canteen</Navbar.Brand>
        </Navbar>
    </div>
  )
}

export default AdminHeaderBar