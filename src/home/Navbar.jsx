import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Button
} from 'reactstrap';

const Header = (props) =>{

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {
        let newIsOpen =!isOpen;
        setIsOpen(newIsOpen);
    }
    return(
        
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Restaurant search</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        
    )
}

export default Header;