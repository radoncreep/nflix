import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { userAuthListener } from './hooks';

function App() {
  const { user }   = userAuthListener();

  return (
    <Router>
      {/* <Switch> */}
        <Route path={ROUTES.SIGNIN} component={Signin}>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
            <Signup />
          </IsUserRedirect>
        </Route>
        {/* <Route path={ROUTES.SIGNUP} component={Signup} /> */}
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
        {/* <Route path={ROUTES.BROWSE} component={Browse} /> */}
      {/* </Switch> */}
    
      {/* <Route exact path="/user">
        <p style={{ color: 'white' }}>Hello I'm a user</p>
      </Route> */}
    </Router>
  );
}

export default App;
