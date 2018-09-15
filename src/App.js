import React, { Component } from 'react';
import './App.css';
import { Provider, Context } from './Provider';
import NavBar from './nav/Navbar';
import ApplicationViews from './ApplicationViews';
import { Container } from 'bloomer/lib/layout/Container';
import FooterComponent from './FooterComponent';
import Alert from './alert/Alert';

class App extends Component {
  render() {
    return (
      <div id="app-body">
        <Provider>
          <Context.Consumer>
            {context => (
              <div id="app-content">
                <NavBar />
                <Container>
                  <ApplicationViews />
                  <Alert
                    alert={context.state.alert}
                  />
                </Container>
              </div>
            )}

          </Context.Consumer>
          <div id="app-footer">
            <FooterComponent />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;