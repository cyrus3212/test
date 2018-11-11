import React from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './_header.css';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
  }

onClick = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
}

render() {
    return(
      <div className="header">
        <Navbar dark expand="md" scrolling fixed="top">
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem active>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/contact">Contacts</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="#"><Fa icon="facebook" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="instagram" /></NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;