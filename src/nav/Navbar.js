import React, { Component } from 'react'
import { Navbar, NavbarMenu, NavbarStart, NavbarBurger } from 'bloomer'
import { Link } from 'react-router-dom'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';

class NavBar extends Component {

    state = {
        isActive: false,
    }


    render() {
        return (
            <React.Fragment>
                <Navbar style={{ border: 'solid 1px black', margin: '0' }}>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <Link to="/">Home</Link>
                            <Link to="/profile">Profile</Link>
                            <Link to="/students">Students</Link>
                            <Link to="/lessons">Lessons</Link>
                        </NavbarStart>
                        <NavbarEnd>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <a>Login</a>
                        </NavbarEnd>
                    </NavbarMenu>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavBar
