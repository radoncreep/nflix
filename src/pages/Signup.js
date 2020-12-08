import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';

import { Form } from '../components';
import FooterContainer from '../container/Footer';
import { HeaderContainer } from '../container/Header';
import * as ROUTES from '../constants/routes';

const Signup = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    // states
    const [firstname, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstname === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        // do firebase stuff
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => { // updating the signed up user profile in firebase by setting using the following method
                result.user
                    .updateProfile({
                        displayName: firstname,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        setFirstName('');
                        setEmailAddress('');
                        setPassword('');
                        history.push(ROUTES.BROWSE);
                    })
            })
            .catch((error) => {
                // setFirstName('');
                // setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    };

    // const inputPasswordHandler = event => {
    //     setPassword(event.target.value)
            // if (event.target.value.trim === "") {
                
            // }
    // }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {/* if there's an error - error alert */}
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        {/* firstname input field */}
                        <Form.Input 
                            type="text"
                            placeholder="first name"
                            value={firstname}
                            // destruture the target
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        {/* email input field */}
                        <Form.Input 
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            autoComplete="off"
                            // destruture the target
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        {/* password input field */}
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            // destruture the target
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign in
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to="/signup">Sign in now</Form.Link>
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

export default Signup;
