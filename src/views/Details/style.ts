import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.grey1000};
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
`   