import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';

import { Form } from '../components';
import FooterContainer from '../container/Footer';
import { HeaderContainer } from '../container/Header';
import * as ROUTES from '../constants/routes';

export default function SignIn({ children, ...restProps }) {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();

        // firebase works here
        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                // push to the browse page
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                // set password to empty
                // setEmailAddress('');
                // setPassword('');
                // firebase returns an error object with a message property
                console.log(error)
                setError(error.message);
            });
    }
    // check if input elements are valid
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {/* if there's an error - error alert */}
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            autoComplete="off"
                            // destruture the target
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            // destruture the target
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign in
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>
                    <Form.SmallText>
                        This page is protected by googl reCaptcha to ensure you're
                        not a bot. Learn more.
                    </Form.SmallText>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}