import React, { Component } from 'react'
import { Navbar, NavbarMenu, NavbarStart, NavbarBurger, NavbarItem } from 'bloomer'
import { Link } from 'react-router-dom'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { Context } from '../Provider';

/*  
    module: navbar component
    author: riley mathews
    purpose: to create the main navbar for the application
*/

class NavBar extends Component {

    // state holds information that the dropdown needs to function
    state = {
        isActive: false,
    }

    // method to set state based on nav clicks in mobile media query
    onClickNav = evt => {
        this.setState({isActive: !this.state.isActive})
    }


    render() {
        return (
            <React.Fragment>
                <Context.Consumer>
                    {context => (
                        <Navbar style={{ border: 'solid 1px black', margin: '0' }}>
                            <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                                <NavbarStart>

                                    {context.state.authToken !== "" ?
                                        <React.Fragment>
                                            <Link to="/profile"><NavbarItem>Profile</NavbarItem></Link>
                                            {context.state.user.is_student ?
                                                <Link to="/assignments"><NavbarItem>Assignments</NavbarItem></Link>
                                                :
                                                <React.Fragment>
                                                    <Link to="/students"><NavbarItem>Students</NavbarItem></Link>
                                                    <Link to="/lessons"><NavbarItem>Lessons</NavbarItem></Link>
                                                    <Link to="/documents"><NavbarItem>Documents</NavbarItem></Link>
                                                </React.Fragment>
                                            }
                                        </React.Fragment>
                                        :
                                        null
                                    }

                                    <Link to="/"><NavbarItem>Home</NavbarItem></Link>



                                </NavbarStart>
                                <NavbarEnd>
                                    {context.state.authToken === "" ?
                                        <React.Fragment>
                                            <Link to="/login"><NavbarItem>Login</NavbarItem></Link>
                                            <Link to="/register"><NavbarItem>Register</NavbarItem></Link>
                                        </React.Fragment>
                                        :
                                        <a onClick={context.clearUserInformation}><NavbarItem>Logout</NavbarItem></a>
                                    }
                                </NavbarEnd>
                            </NavbarMenu>
                            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                        </Navbar>
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default NavBar
