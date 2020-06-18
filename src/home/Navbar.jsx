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
import styled from 'styled-components';


const Header = (props) =>{

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {
        let newIsOpen =!isOpen;
        setIsOpen(newIsOpen);
    }

    const Wrapper = styled.div`
        padding: 20px;
    `;

    return(
        <Wrapper>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/"></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button className="navbtn" onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </Wrapper>
    )
}

export default Header;