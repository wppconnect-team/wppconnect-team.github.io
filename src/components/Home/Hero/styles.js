import styled from "styled-components";

export const Layout = styled.div`
  background: #fff;
  height: 100%;
  padding: 2em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GrayTop = styled.div`
  //height: 75%;
  //padding: 3em;
  //
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 75%;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    background: #e6e9ef;
    top: -15em;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 12.5px;
    border-bottom-right-radius: 12.5px;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-size: 55.5px;
  line-height: 65px;
  font-weight: 700;
  color: #3e4348;
  text-align: center;
  margin-top: 1.5em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: rgb(127, 136, 147);
  line-height: 28px;
  font-weight: 400;
  max-width: 500px;
  text-align: center;
  margin-top: 2em;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 1em;
    max-width: 300px;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  align-items: center;

  background-color: #6d48e5;
  box-shadow: rgb(109 72 229 / 65%) 0px 10px 26px -6px;
  transition-property: background-color, color, transform, box-shadow;
  transition-duration: 400ms, 200ms, 400ms, 400ms;
  transition-timing-function: ease, ease, ease, ease;
  padding: 1em;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  margin-top: 2em;
  padding-left: 2em;

  svg {
    margin-left: 1.5em;
    margin-right: 10px;
  }

  :hover {
    box-shadow: none;
    transform: translateY(10px);
  }
`;

export const ImageHero = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 3em;
  margin-bottom: 3em;
  max-width: 1000px;

  @media (max-width: 768px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;