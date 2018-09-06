import React, { Component } from 'react'
import { Navbar, NavbarMenu, NavbarStart, NavbarBurger } from 'bloomer'
import { Link } from 'react-router-dom'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { Context } from '../Provider';

class NavBar extends Component {

    state = {
        isActive: false,
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
                                            <Link to="/profile">Profile</Link>
                                            {context.state.user.is_student ?
                                                <Link to="/assignments">Assignments</Link>
                                                :
                                                <React.Fragment>
                                                    <Link to="/students">Students</Link>
                                                    <Link to="/lessons">Lessons</Link>
                                                </React.Fragment>
                                            }
                                        </React.Fragment>
                                        :
                                        null
                                    }

                                    <Link to="/">Home</Link>



                                </NavbarStart>
                                <NavbarEnd>
                                    {context.state.authToken === "" ?
                                        <React.Fragment>
                                            <Link to="/login">Login</Link>
                                            <Link to="/register">Register</Link>
                                        </React.Fragment>
                                        :
                                        <a onClick={context.clearUserInformation}>Logout</a>
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
