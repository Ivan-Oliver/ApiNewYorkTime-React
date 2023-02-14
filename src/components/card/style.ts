import styled, { css } from "styled-components";
//Dasboards
const CommonTextStyles = css`
 color: ${({ theme }) => theme.colors.white100};
`
export const Title = styled.p`
 ${CommonTextStyles}
`

export const Description = styled.p`
 ${CommonTextStyles}
`

export const Divider = styled.hr`
`
//Details


export const ButtonAmazon = styled.button`
 background-color: orange;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 3px 2px rgba(176,176,176,1);
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 20px;
    outline: none;
    padding: 10px 20px;
    text-align: center;	
    text-decoration: none;
    width: fit-content;
    &:hover {
    background-color: ${({ theme }) => theme.colors.blue300};
    font-size: 14px;
    }
`

export const  EnlaceAmazon = styled.a`
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
`

export const Image = styled.img`
     height: 35%;
    padding: 20px;
    padding-left: 20px;
    width: 80%;
`

export const BackButton = styled.button`
position: absolute;
    background-color: ${({ theme }) => theme.colors.blue300};
    font-weight: bold;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 3px 2px rgba(176,176,176,1);
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    margin-top: 100px;
    outline: none;
    padding: 10px 20px;
    text-align: center;	
    text-decoration: none;
    width: fit-content;
    &:hover {
    color: ${({ theme }) => theme.colors.white100};
    background-color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    }`
