import styled from "styled-components";

export const Layout = styled.div`
  background: #fff;
  height: 100%;
  margin-bottom: 2em;
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
  margin: 0 auto 1em auto;

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

  li {
    border-right: 1px solid rgba(0, 0, 0, .2);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5em 2em;
    align-items: center;

    :last-child {
      border-right: 0;
    }

    h1 {
      font-size: 23px;
      line-height: 27px;
      font-weight: 600;
      color: #3E4348;
      text-align: center;
    }

    p {
      color: #999;
      font-size: 14px;
      text-align: center;
      margin-top: 1em;
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