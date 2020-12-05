import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

// using named export 
// the function is being imported in Faqs.js
// it returns a JSX container which is like a div
// it passes the children element within it as args 
// and then spreads all props (cld be attributes)
// then wraps its children elements


export const OptForm = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

OptForm.Input = ({ ...restProps }) => {
    return <Input {...restProps}/>
};

OptForm.Button = ({ children, ...restProps }) => {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now"/>
        </Button>
    );
};

OptForm.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
};

OptForm.Break = ({ children, ...restProps }) => {
    return <Break {...restProps }/>
}


// same as this
// const OptForm = ({ children, ...restProps }) => {
//     return (
//         <Container>
//             {Children}
//         </Container>
//     )
// }