import React, { Component } from 'react'
import {Tabs, TabList, Tab, TabLink} from 'bloomer'


class StudentNav extends Component {


    render() {
        return (
            <React.Fragment>
                <Tabs>
                    <TabList>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="student-nav" id="student_nav__list">
                                <span>List</span>
                            </TabLink>
                        </Tab>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="student-nav" id="student_nav__add">
                                <span>Search</span>
                            </TabLink>
                        </Tab>
                    </TabList>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default StudentNav
