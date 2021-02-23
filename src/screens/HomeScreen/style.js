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
            color: gray;
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
        // border: 1px solid purple;
        display: flex;
        align-items: center;
        flex-direction: column;
        height:100px;
        width: 100%
    }
`;


export const BookListContainer = styled.div`
    &&{
        
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        margin: 2em;
        border: 1px solid black;
    }
`;

export const BookContainer = styled.div`
    &&{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 400px;
        height: 350px;
        margin:15px;
        padding:10px;
        border:1px solid gray;
        :hover{
            transform: scale(1.05);
        }
    }
`;

export const AlignedDropdown = styled.div`
    &&{
        style=width: 100%;
        display:flex;
        justify-self: center;
        margin:1em;
        padding:1em;
    }
`;