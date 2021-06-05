import styled from "styled-components";

export const Layout = styled.div`
  width: 60%;
  height: auto;
  max-width: 500px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 12.5px;
  padding: 3em 4em;

  color: #333;

  @media (max-width: 768px) {
    text-align: center;
    padding: 3em 4em;
    max-width: 90%;
    width: 100%;
  }
`;

export const HeaderItem = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1em 0;

  p {
    width: 100%;
    text-align: left;
    
    b {
      color: #b1812f;
    }
  }

  h1 {
    margin-bottom: .5em;
    font-weight: 700;
    text-align: left;
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  a {
    display: flex;
    flex-direction: column;
    width: 70px;
    height: 70px;
    margin-right: 2em;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 13px;
    object-fit: contain;
    transition-duration: 200ms;
    
    :hover {
      transform: scale(1.1);
    }
  }
`;