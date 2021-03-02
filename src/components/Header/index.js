import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink } from './Styles/header';

export const Header = ({ bg=true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, restProps }) {
    return (
        <ButtonLink to={to}>
            {children}
        </ButtonLink>    
    )
};