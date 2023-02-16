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
import { setAuthenticatedToken } from '../../services/storage';

const Login: FC<Props> = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (values: typeof initialValues, { setErrors }: any) => {
        try {
            const { email, password } = values
            const userCredentialsLogin = await signInWithEmailAndPassword(auth, email, password)

            const token = await userCredentialsLogin.user.getIdToken()
            setAuthenticatedToken(token)

            navigate('/home')
        } catch (error) {
            setError('Error al registrarse')
        }
    };


    return (
        <FormContainer>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleLogin}
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
                    <FormButton type="submit">SignIn</FormButton>
                </Form>
            </Formik>

        </FormContainer>


    );
};

export default memo(Login);