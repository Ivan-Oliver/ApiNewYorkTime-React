import styled, { css } from "styled-components";

export const Container = styled.div`
display: flex;
flex-flow: column;  
box-shadow: 0px 0px 10px 2px rgba(176,176,176,1);
    margin: 20px;
    padding: 15px;
    width: 200px;
`
export const Content = styled.div`
    
`

const CommonTextStyles = css`
 color: ${({theme}) => theme.colors.white100};
`
export const Title = styled.p`
 ${CommonTextStyles}
`

export const Description = styled.p`
 ${CommonTextStyles}
`

export const Divider = styled.hr`
`
export const MainContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
    margin: 15px 25px; 
`

export const ContainerDetails = styled.div`
-webkit-box-shadow: 0px 0px 2px 1px rgba(176,176,176,1);
    -moz-box-shadow: 0px 0px 2px 1px rgba(176,176,176,1);
    box-shadow: 0px 0px 10px 2px rgba(176,176,176,1);
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 200px;
`

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
    background-color: ${({theme}) => theme.colors.blue300};
    font-size: 14px;
    }
`

export const EnlaceAmazon = styled.a`
    color: ${({theme}) => theme.colors.black};
    font-weight: bold;
`

export const Image = styled.img`
     height: 35%;
    padding: 20px;
    padding-left: 20px;
    width: 80%;
`

export const BackButton = styled.button`
    background-color: ${({theme}) => theme.colors.blue300};
    font-weight: bold;
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
    color: ${({theme}) => theme.colors.white100};
    background-color: ${({theme}) => theme.colors.black};
    font-size: 14px;
    }`
