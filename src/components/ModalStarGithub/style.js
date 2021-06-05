import styled from "styled-components";

export const Layout = styled.div`
  width: 60%;
  height: auto;
  max-width: 500px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #333;
  border-radius: 12.5px;

  color: #ddd;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    text-align: center;
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

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  p {
    b {
      color: #b1812f;
    }
  }

  h1 {
    margin-bottom: .5em;
    font-weight: 700;
  }

  iframe {
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 140px;
    height: 30px;
  }

  button {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px;
    color: #333;
    outline: 0;
    border: 0;
    margin-top: 1.5em;
    border-radius: 3px;
    cursor: pointer;
    transition-duration: 200ms;

    svg {
      margin-right: 10px;
    }

    :hover {
      background: #000;
      color: #fff;
    }
  }
`;