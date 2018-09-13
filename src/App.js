import React, { Component } from 'react';
import './App.css';
import { Provider } from './Provider';
import NavBar from './nav/Navbar';
import ApplicationViews from './ApplicationViews';
import { Container } from 'bloomer/lib/layout/Container';
import FooterComponent from './FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Provider>
            <NavBar />
            <Container>
            <ApplicationViews />
            </Container>
            <FooterComponent />
          </Provider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;