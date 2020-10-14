import React from 'react';
import Feedback from './components/Feedback'
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Display from './components/display'
import store from './store';
import { Provider } from 'react-redux';


class App extends React.Component
{

  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
        
            
            <Switch>
              <Route path="/form/submit" exact={true} component={ Display } />   
              <Route path="/form" exact={true} component={ Feedback } /> 
            </Switch>
          </div>
        </BrowserRouter>
      
      </Provider>
    )
  }
}


export default App;
