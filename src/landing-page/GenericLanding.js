import React, { Component } from 'react'
import Banner from '../display-components/Banner';
import { Context } from '../Provider';
import { Button } from 'bloomer'
import './Landing.css'

/*  
    module: generic landing component
    author: riley mathews
    purpose: to be the generic landing page users see if they are not logged in
*/


class GenericLanding extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner
                            title="Welcome to Lesson Ninja!"
                            text="Lesson Ninja is an online tool that allows private instructors to manage their lessons, documents, and students. Students can sign up and easily view their lessons and view documents from their teacher."
                        />
                        <div id="homepage-buttons">
                            <Button onClick={() => context.routeTo('/register')}>Register</Button>
                            <Button onClick={() => context.routeTo('/login')}>Login</Button>
                        </div>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default GenericLanding
