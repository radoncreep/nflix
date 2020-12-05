import React from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';

// not exporting as a default function
export function HeaderContainer({ children, ...restProps }) {
   return (
       <Header>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Netflix"/>
               <Header.ButtonLink to={ROUTES.SIGNIN}>SIGNIN</Header.ButtonLink>
           </Header.Frame>
           {children}
       </Header>
   )
}