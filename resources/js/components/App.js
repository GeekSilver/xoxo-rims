import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import Nav from './container/Nav';
import Rims from './container/Rims';
import store from '../store';
import {persistor} from '../store';
import Rim from './container/Rim';

class App extends Component {
    render(){
        return (
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <div className="">
                            <Nav />

                        <Switch>
                            <Route exact path='/' component={Rims}>
                            </Route>                  
                            <Route path='/:id' component={Rim}>
                            </Route>
                        </Switch>
                        </div> 
                    </BrowserRouter>
                </PersistGate>                
            </Provider>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(
      <App />  
    , document.getElementById('root'));
}
