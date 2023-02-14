import styled from "styled-components";
 

export const FormContainer = styled.div`

`
export const Form = styled.div`
border: solid 1px black;
display: flex;
flex-flow: column;  
box-shadow: 0px 0px 10px 2px rgba(176,176,176,1);
margin: 30px;
margin-left: 150px;
padding-bottom: 200px;
height: 100px;
width: 100;
`

export const FormMessage = styled.p`
color:white;
font-size:24PX;
`
export const Input = styled.input`
font-size: 24px;
border: none;
  background-color: transparent;

`

export const FormButton = styled.div`
background-color: ${({theme}) => theme.colors.blue300};
display: inline-block;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 10px;
    padding: 20px 90px;
    font-size: 12px;
    cursor: pointer;
    text-align: center;	
    text-decoration: none;
    outline: none;
    color: ${({theme}) => theme.colors.white100};
    border: none;
    box-shadow: 0 2px #999;
    border-radius: 2px;
    width: fit-content;
    &:hover {
    background-color: ${({theme}) => theme.colors.black};
    font-size: 16px;}
`