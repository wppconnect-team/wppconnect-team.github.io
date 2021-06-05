import styled from "styled-components";

export const Layout = styled.footer`
  width: 100%;
  padding: 2em;
`

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  background: #141618;
  flex-direction: column;
  padding: 3em;

  h2 {
    margin: 0 auto;
    color: #fff;
    font-size: 36px;
  }
  
  h3 {
    color: #fff;
    font-size: 26px;
  }

  .main {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 3em;
    margin-top: 3em;

    @media(max-width: 768px){
      flex-direction: column;
      text-align: center;
    }
    
    div{
      :nth-child(2){
        margin: 0 5em;

        @media(max-width: 768px){
          margin: 3em 0;
        }
      }
    }

    .icons {
      display: flex;
      flex-direction: column;
      color: #fff;

      svg {
        cursor: pointer;
        margin-bottom: 1em;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-top: 1em;

    li {
      margin-top: 1em;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`