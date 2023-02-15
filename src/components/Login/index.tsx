import { FC, memo } from 'react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase'
import { Props } from './types'
import { Form, FormButton, FormContainer, Input, FormMessage, Error } from './style';
import { Formik, Field } from 'formik';
import { validationSchema } from './constants';
import { initialValues } from './constants';
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
            setError('Error al registrarse')
        }
    };


    return (
        <FormContainer>
            <Formik
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Hemos echo submit', values);
                }}
                initialValues={initialValues}
            >
                <Form>
                    <Field name="email">
                        {({ field, meta }: { field: any, meta: any }) => (
                            <>
                                <FormMessage>Login</FormMessage>
                                <Input
                                    $hasError={!!meta?.error}
                                    type="email"
                                    value={email}
                                    placeholder="Wirte yout email..."
                                    onChange={(event) => setEmail(event.target.value)}
                                    {...field}
                                />
                                {!!meta?.error && <Error>{meta.error}</Error>}
                            </>

                        )}
                    </Field>
                    <Field name="password">
                        {({ field, meta }: { field: any, meta: any }) => (
                            <>
                                <Input
                                    $hasError={!!meta?.error}
                                    type="password"
                                    value={password}
                                    placeholder="Wirte yout password..."
                                    onChange={(event) => setPassword(event.target.value)}
                                    {...field}

                                />
                                {!!meta?.error && <Error>{meta.error}</Error>}
                            </>
                        )}
                    </Field>
                    <FormButton onClick={handleLogin}>SignIn</FormButton>
                </Form>
            </Formik>

        </FormContainer>


    );
};

export default memo(Login);