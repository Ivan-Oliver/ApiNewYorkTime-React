import { FC, memo } from 'react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase'
import { Props } from './types'
import { Form, FormButton, FormContainer, Input, FormMessage, Error } from './style';
import { Formik, Field } from 'formik';
import { validationSchema } from './constants';
import { initialValues } from './constants';

const SignUp: FC<Props> = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleSignup = async (values: typeof initialValues, { setErrors }: any) => {
        try {
            const {email,password} = values
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/home')
        } catch (error) {
             setError('Error al registrarse')
             console.error(error)
        }
    };


    return (
        <FormContainer>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleSignup}
                initialValues={initialValues}
            >
                <Form>
                    <Field name="email">
                        {({ field, meta }: { field: any, meta: any }) => (
                            <>
                                <FormMessage>Register</FormMessage>
                                <Input
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
                    <FormButton type="submit">Signup</FormButton>
                </Form>
            </Formik>

        </FormContainer>


    );
};

export default memo(SignUp);