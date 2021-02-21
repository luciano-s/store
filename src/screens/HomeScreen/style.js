import styled from "styled-components";

export const Header =  styled.header`
 && {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 15vh;
        background: black;
        color: #333;
        .link{
            text-decoration: none;
            color: #ccc;
            padding-right: 8rem;
        }
        
        img{
            width: 6rem;
            height: 100%;

        }

    }
`;

export const StyledFooter = styled.footer`
    &&{
        display: flex;
        color: #ccc;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        position: relative;
        bottom: 0;
        background: #444;
        width:100vw;
        height:15vh;
    }
`;

export const DescriptionContainer = styled.div`
    &&{
        display: flex;
        flex-direction: column;
    }
`;


