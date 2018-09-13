import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title, Content} from 'bloomer'

/*  
    module: lesson component
    author: riley mathews
    purpose: to display information about a lesson object passed down to it
*/


class Lesson extends Component {


    render() {
        return (
            <React.Fragment>
                <Hero isSize='small'>
                    <HeroBody>
                        <Container hasTextAlign='centered'>
                            <Title>{this.props.lesson.name}</Title>
                            <Content>
                                <p>
                                    description: {this.props.lesson.description} 
                                    <br/>
                                    content: {this.props.lesson.content}
                                </p>
                            </Content>
                        </Container>
                    </HeroBody>
                </Hero>
            </React.Fragment>
        )
    }
}

export default Lesson
