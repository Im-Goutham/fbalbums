import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Particles from 'react-particles-js';

import Router from './router';
import './App.css';


const particleOpt = {
    particles: {
       
    }
}

// Provider to use redux store in app

class App extends Component {

  
  render() {
    return (
      <Container >
          <Particles 
              params={{
            		particles: {
        
                  number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
            		}
            	}}
    
            />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router />
            </PersistGate>
        </Provider>

       </Container>  
    );
  }
}

export default App;
