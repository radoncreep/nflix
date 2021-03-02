import React from 'react';
import { Container, Base, Error, SmallText, Title, Text, Link, Input, Submit  } from './styles/form';


export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Form.Base = ({ children, ...restProps }) => {
    return <Base {...restProps}>{children}</Base>
};

Form.Error = ({ children, ...restProps }) => {
    return <Error {...restProps}>{children}</Error>
};

Form.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
};

Form.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
};

Form.SmallText = ({ children, ...restProps }) => {
    return <SmallText {...restProps}>{children}</SmallText>
};

Form.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
};

Form.Input = ({ children, ...restProps }) => {
    return <Input {...restProps}>{children}</Input>
};

Form.Submit = ({ children, ...restProps }) => {
    return <Submit {...restProps}>{children}</Submit>
}