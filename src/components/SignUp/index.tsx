import { FC } from 'react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firabase'
import { Props } from './types'
import { Form, FormButton, FormContainer, Input, FormMessage } from './style';

const SignUp: FC<Props> = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/home')
        } catch (error) {
            // setError('Error al registrarse')
        }
    };


    return (
        <FormContainer>
            {error && <p>{error}</p>}
            <Form
            >
                <FormMessage>Register</FormMessage>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <FormButton onClick={handleSignup}>Signup</FormButton>
            </Form>
        </FormContainer>


    );
};

export default SignUp;