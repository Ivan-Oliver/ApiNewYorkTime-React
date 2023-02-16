import styled, { css } from "styled-components";
import { Form as DefaultForm } from "formik";


export const FormContainer = styled.div`

`
export const Form = styled(DefaultForm)`
display: flex;
flex-flow: column;  
box-shadow: 0px 0px 10px 2px black;
margin: 30px;
margin-left: 100px;
padding-bottom: 200px;
height: 200px;
`

export const FormMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
font-weight: bold;
font-family:Arial, Helvetica, sans-serif;
font-size:24PX;
`
export const Input = styled.input<{ $hasError?: boolean }>`
border:0.1px solid ${({ $hasError, theme }) => $hasError ? theme.colors.danger : theme.colors.secondary};
background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
font-size: 24px;
margin: 25px;
border: none;


${({ $hasError, theme }) =>

    $hasError && css`
        color:${theme.colors.black}
`};

`
export const Error = styled.span`
color: ${({ theme }) => theme.colors.danger};
color:red;
font-size: 16px;

`

export const FormButton = styled.button`
background-color: ${({ theme }) => theme.colors.blue300};
display: inline-block;
    margin-top: 42px;
    margin-left: 55px;
    padding: 20px 90px;
    font-size: 12px;
    cursor: pointer;
    text-align: center;	
    text-decoration: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white100};
    border: none;
    box-shadow: 0 2px #999;
    border-radius: 2px;
    width: fit-content;
    &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    font-size: 16px;}
`