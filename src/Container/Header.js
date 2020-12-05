import React from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

// not exporting as a default function
export function HeaderContainer({ children, ...restProps }) {
   return (
       <Header>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
               <Header.ButtonLink to={ROUTES.SIGNIN}>SIGN IN</Header.ButtonLink>
           </Header.Frame>
           {children}
       </Header>
   );
};

// restProps applies every props passed down