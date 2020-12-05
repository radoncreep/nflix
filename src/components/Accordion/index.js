import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Title, Item, Header, Body } from './styles/accordion.js'

const ToggleContext = createContext();
export default function Accordion ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};


Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [ toggleShow, setToggleShow ] = useState(false);

    // passing down the destructuring by using a provider
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    // console.log(ToggleContext, ' toggle context');
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header 
            onClick={() => setToggleShow(toggleShow => !toggleShow)} 
            {...restProps}>{children}
            {/* should state value in UI w.o checking the console */}
            {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close"/> 
            ) : <img src="/images/icons/add.png" alt="Open"/>}
        </Header>
    )
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};


// at line 36 the toggle couldbe setToggleShow(!toggleShow)
// but becos of react batching - that is having alot of state
// which could lead to the unintended value being rendered 
// we are using the previous state of the toggleShow 
// and setting it to its inverse
// so this way the value is always going to be the the inverse of what it was 
// after user interraction