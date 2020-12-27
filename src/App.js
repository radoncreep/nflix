import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { userAuthListener } from './hooks';

function App() {
  const { user }   = userAuthListener();

  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP} exact>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;

// {/* <Route path={ROUTES.SIGNUP} component={Signup} /> */}

//         {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
//         {/* <Route path={ROUTES.BROWSE} component={Browse} /> */}
//         {/* </Switch> */}
    
//       {/* <Route exact path="/user">
//         <p style={{ color: 'white' }}>Hello I'm a user</p>
//       </Route> */}