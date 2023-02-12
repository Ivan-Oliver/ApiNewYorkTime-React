import styled from "styled-components";

export const CustomButton = styled.button`
background-color: ${({theme}) => theme.colors.blue300};
display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
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
    font-size: 14px;
    }
`