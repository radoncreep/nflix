import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallout, Link, Group, Picture, Profile, Dropdown, Search, SearchInput, SearchIcon, PlayButton } from './Styles/header';

export const Header = ({ bg=true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Feature = ({children, ...restProps}) => {
    return <Feature {...restProps}>{children}</Feature>
};

Header.FeatureCallout = ({children, ...restProps}) => {
    return <FeatureCallout {...restProps}>{children}</FeatureCallout>
};

Header.Dropdown = ({children, ...restProps}) => {
    return <Dropdown {...restProps}>{children}</Dropdown>
};
Header.Picture = ({ src, ...restProps}) => {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
};

Header.Search = function GetSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [ searchActive, setSearchActive ] = useState(false);

    return (
        <Search {...restProps}>
            {/* used a callback to avoid batching of setting true and false of state */}
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm} 
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = ({children, ...restProps}) => {
    return <Profile {...restProps}>{children}</Profile>
};

Header.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
};
Header.TextLink = ({children, ...restProps}) => {
    return <Link {...restProps}>{children}</Link>
};

Header.PlayButton = ({ children, ...restProps }) => {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Frame = ({ children, restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Header.Group = ({ children, restProps }) => {
    return <Group  {...restProps}>{children}</Group >
};

Header.Logo = ({ to, children, ...restProps }) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = ({ to, children, restProps }) => {
    return (
        <ButtonLink to={to}>
            {children}
        </ButtonLink>    
    )
};