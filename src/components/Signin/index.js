import React from 'react'
import {
    FormContent,
    Container,
    Formwrap,
    Form,
    FormButton,
    FormH1,
    FormLabel,
    FromInput,
    Icon,
    Text
} from "./SigninElements"

const SignIn = () => {
    return (
        <Container>
            <Formwrap>
                <Icon to="/">Antor</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>email</FormLabel>
                        <FromInput type='email' required="required"/>
                        <FormLabel htmlFor='for'>password</FormLabel>
                        <FromInput type='password' required="required"/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </Formwrap>
        </Container>
    )
}

export default SignIn
