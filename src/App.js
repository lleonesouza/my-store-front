import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Public Routes
import NavBar from './components/navbar/navbar'

export default function App(props) {

  var normalRoutes = props.normalRoutes

  return (
    <div className="App">
    
      <header>
          <NavBar routes={{ normalRoutes }}/>
      </header>


      <Switch>
          {normalRoutes.map((route) => (<Fragment>
              <Route exact={true} path={route.url} component={route.component} />
              {route.subComponents.map((subRoute) => 
                <Route exact={true} path={subRoute.url} component={subRoute.component} />
              )}
          </Fragment>
          ))}
      </Switch>


    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.users
});

