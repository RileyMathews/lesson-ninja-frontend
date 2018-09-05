import React, { Component } from 'react'

/*
    module: context provider
    author: riley mathews
    purpose: to hold state at a top level in the application and pass that down to any component that would need to use it
*/

export const Context = React.createContext()

export class Provider extends Component {


    // The initial state of the data provider should include
    // default values for any top-level component that will
    // need the data. In this case, PoliticianList is my only
    // top-level component. It is not a child of any other
    // component.

    state = {
    
    }




    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                // pass state
                state: this.state,

            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}
