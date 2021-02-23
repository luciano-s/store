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
        bottom: 0;
        position: absolute;
        background: #444;
        width:100vw;
        height:15vh;
    }
`;

export const DescriptionContainer = styled.div`
    &&{
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
        flex-wrap: wrap;
        justify-content: center;
        margin: 2em;
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
        border-radius: 2em;
        :hover{
              -moz-box-shadow: 5px 5px 5px 5px #999;
              -webkit-box-shadow: 5px 5px 5px 5px #999;
              box-shadow: 5px 5px 5px 5px #999;
        }
    }
`;

export const AlignedDropdown = styled.div`
    &&{
      width: 100vw;
      display: flex;
      justify-content: center;
      margin: 1em;
      padding: 1em;
    }
`;


export const HomeScreenContainer = styled.div`
  &&{
    background: whitesmoke;
    width: 100vw;
    height: 100vh;
  }`;

export const MyOrders = styled.div`
  &&{
        
  }
`;

export const EmptyCartContainer = styled.div`
  && {
    display: flex;
    width: 100vw;
    padding-top: 8em;
    align-items: center;
    justify-content: center;
  }
`;

export const BookCartContainer = styled.div`
  && {
    display: flex;
    align-items: center;
    height: 20rem;
    margin: 3em;
    padding: 2em;
    -moz-box-shadow: 1px 1px 1px 1px #999;
    -webkit-box-shadow: 1px 1px 1px 1px #999;
    box-shadow: 1px 1px 1px 1px #999;
    
    border-radius: 10px;
    background: white;
  }
`;