import React, { Component } from 'react'
import { Card, CardHeader, CardHeaderTitle, CardImage, Image, CardFooter, CardFooterItem } from 'bloomer'


class DropdownBox extends Component {


    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardHeader>
                        <CardHeaderTitle>
                            {this.props.text}
                        </CardHeaderTitle>
                    </CardHeader>
                    {this.props.image ?
                        <CardImage>
                            <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
                        </CardImage>
                        :
                        null
                    }
                    {this.props.callback1 ?
                        <CardFooter>
                            <CardFooterItem className="clicky" onClick={this.props.callback1}>{this.props.callback1Text}</CardFooterItem>
                            {this.props.callback2 ?
                            <CardFooterItem className="clicky" onClick={this.props.callback2}>{this.props.callback2Text}</CardFooterItem> : null}
                        </CardFooter>
                        :
                        null
                    }

                </Card>
            </React.Fragment>
        )
    }
}

export default DropdownBox
