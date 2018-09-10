import React, { Component } from 'react'
import { Tabs, TabList, Tab, TabLink } from 'bloomer'


class DocumentNav extends Component {


    render() {
        return (
            <React.Fragment>
                <Tabs>
                    <TabList>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="document-nav" id="document_nav__list">
                                <span>List</span>
                            </TabLink>
                        </Tab>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="document-nav" id="document_nav__add">
                                <span>Add</span>
                            </TabLink>
                        </Tab>
                    </TabList>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default DocumentNav
