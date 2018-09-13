import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title, Content} from 'bloomer'


class Banner extends Component {


    render() {
        return (
            <React.Fragment>
                <Hero isSize='small'>
                    <HeroBody>
                        <Container hasTextAlign='centered'>
                            <Title>{this.props.title}</Title>
                            <Content>
                                <p className="multi-line">
                                    {this.props.text}
                                </p>
                            </Content>
                        </Container>
                    </HeroBody>
                </Hero>
            </React.Fragment>
        )
    }
}

export default Banner
