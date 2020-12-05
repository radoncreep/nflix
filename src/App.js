import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      {/* <Switch> */}
        <Route exact path={ROUTES.HOME} component={Home} /> 
        <Route path={ROUTES.SIGNUP} component={Signup} />
        <Route path={ROUTES.SIGNIN} component={Signin} />
        <Route path={ROUTES.BROWSE} component={Browse} />
      {/* </Switch> */}
    
      {/* <Route exact path="/user">
        <p style={{ color: 'white' }}>Hello I'm a user</p>
      </Route> */}
    </Router>
  );
}

export default App;
