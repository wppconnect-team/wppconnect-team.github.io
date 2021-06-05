import styled from "styled-components";

export const Layout = styled.div`
  background: #fff;
  height: 100%;
  margin-top: 5em;
  margin-bottom: 5em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3em;
  padding-left: 3em;

  @media (max-width: 768px) {
    padding-right: 3em;
    padding-left: 3em;
  }
`;

export const SmallTitle = styled.small`
  text-transform: lowercase;
  font-size: 16px;
  color: #999;
  font-weight: 400;
  text-align: center;
  margin-bottom: .5em;
`;

export const Title = styled.h1`
  font-size: 40.5px;
  line-height: 50px;
  font-weight: 700;
  color: #3e4348;
  text-align: center;
  max-width: 500px;
  margin: 0 auto 0 auto;

  b {
    text-decoration: underline;
    color: #724f4f;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: rgb(127, 136, 147);
  line-height: 28px;
  font-weight: 400;
  max-width: 500px;
  text-align: center;
  margin: 1em auto;
`;

export const RepeaterWeDo = styled.ul`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, .2);

  display: flex;
  justify-content: space-between;
  list-style-type: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  img {
    width: 50px;
    height: 50px;
  }

  li {
    border-right: 1px solid rgba(0, 0, 0, .2);
    width: 100%;
    display: flex;
    padding: 1.5em 2em;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      border-right: 0;
      
      :nth-child(2){
        border-top: 1px solid rgba(0, 0, 0, .2);
      }
    }

    div {
      margin-left: 2em;

      h1 {
        font-size: 23px;
        line-height: 27px;
        font-weight: 600;
        color: #3E4348;
      }

      p {
        color: #999;
        font-size: 16px;
        margin-top: 1em;
        max-width: 200px;
      }
      
      button {
        display: flex;
        align-items: center;
        border: 0;
        outline: 0;
        cursor: pointer;

        background-color: #6d48e5;
        box-shadow: rgb(109 72 229 / 65%) 0px 10px 26px -6px;
        transition-property: background-color, color, transform, box-shadow;
        transition-duration: 400ms, 200ms, 400ms, 400ms;
        transition-timing-function: ease, ease, ease, ease;
        padding: 1em;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        border-radius: 10px;
        margin-top: 2em;

        svg {
          margin-left: 1.5em;
          margin-right: 10px;
        }

        :hover {
          box-shadow: none;
          transform: translateY(10px);
        }
      }
    }

    :last-child {
      border-right: 0;
    }
  }
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