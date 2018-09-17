import React, { Component } from 'react'
import { Media, MediaLeft, MediaContent, Content, Level, LevelLeft, Button, MediaRight, Delete } from 'bloomer'


class MediaComponent extends Component {


    render() {
        return (
            <React.Fragment>
                <Media>
                    <MediaLeft>
                    </MediaLeft>
                    <MediaContent>
                        <Content>
                            <p>
                                <strong>{this.props.title}</strong>
                                <br />
                                {this.props.subtitle}
                            </p>
                        </Content>
                        <Level isMobile>
                            <LevelLeft>
                                {this.props.mainCallback ?
                                    <Button onClick={this.props.mainCallback}>{this.props.mainCallbackText}</Button> : null
                                }

                                {this.props.links ? this.props.links.map((link, i) => (
                                    <React.Fragment key={`frag${i}`}>
                                        <a className="link" key={`link${i}`} href={link.url} download={link.download} target="blank">{link.text}</a>
                                    </React.Fragment>
                                )): null}
                            </LevelLeft>
                        </Level>
                    </MediaContent>
                    {this.props.deleteCallback ?
                        <MediaRight><Delete onClick={this.props.deleteCallback} /></MediaRight> : null
                    }
                </Media>
            </React.Fragment>
        )
    }
}

export default MediaComponent
