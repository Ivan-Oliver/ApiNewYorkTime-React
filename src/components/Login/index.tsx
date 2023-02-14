import { FC } from 'react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firabase'
import { Props } from './types'
import { Form, FormButton, FormContainer, Input, FormMessage } from './style';

const Login: FC<Props> = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
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
                <FormMessage> Login</FormMessage>
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
                <FormButton onClick={handleLogin}>SignIn</FormButton>
            </Form>
        </FormContainer>


    );
};

export default Login;