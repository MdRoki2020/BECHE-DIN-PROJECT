import React from 'react'
import {Navbar,Container,Nav,Form,Button,FormControl} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { AiOutlineUserSwitch,AiOutlineVideoCameraAdd,AiOutlineSortDescending,AiOutlineHome } from "react-icons/ai";
import '../Assets/style/NavigationBar.css'
import logo from '../Assets/images/logo.png'

const NavigationBar = () => {
  return (
    
        <div>
        <Navbar expand="lg" className='' bg="light">
            <Container fluid>
                <Navbar.Brand className='navbarLogo' as={Link} to={'/'}><img src={logo} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link as={Link} to={'/'}> Home <AiOutlineHome/></Nav.Link>
                    <Nav.Link as={Link} to={'/postAD'}> Post AD <AiOutlineVideoCameraAdd/></Nav.Link>
                    <Nav.Link as={Link} to={'/allADS'}> All Ads <AiOutlineSortDescending/></Nav.Link>
                    <Nav.Link as={Link} to={'/myAccount'}> My Account <AiOutlineUserSwitch/></Nav.Link>
                    

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  )
}

export default NavigationBar