import styled from "styled-components";
import NotebookImage from "../../../assets/notebook-future.png";

export const Layout = styled.div`
  background: #fff;
  height: 100%;
  margin-bottom: 3em;
  margin-top: 3em;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  .text {
    display: flex;
    width: 70%;
    max-width: 555px;
    min-width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }

  width: 50%;
  height: 550px;
  background-image: url(${NotebookImage});
  background-position: 0px 0px;
  background-size: 1037px;
  background-repeat: no-repeat;
`;

export const SmallTitle = styled.small`
  text-transform: lowercase;
  font-size: 16px;
  color: #999;
  font-weight: 400;
  text-align: center;
  margin-bottom: .5em;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h1`
  font-size: 40.5px;
  line-height: 50px;
  font-weight: 600;
  color: #3e4348;
  text-align: center;
  max-width: 300px;
  margin: 0 auto 0 auto;

  b {
    text-decoration: underline;
    color: #724f4f;
  }
`;

export const Subtitle = styled.p`
  color: rgb(127, 136, 147);
  font-size: 16px;
  line-height: 28px;
  max-width: 300px;
`;

export const CircleComponent = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({bgColor}) => bgColor};
  margin-bottom: 1.5em;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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
  cursor: pointer;

  :hover {
    box-shadow: none;
    transform: translateY(10px);
  }

  svg {
    margin-left: 1.5em;
    margin-right: 10px;
  }
`;