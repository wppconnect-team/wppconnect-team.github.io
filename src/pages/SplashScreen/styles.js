import styled from "styled-components";

export const Layout = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  .content {
    display: flex;
    flex-direction: column;

    img {
      width: 350px;
      object-fit: contain;
    }

    .progress {
      height: 5px;
      background-color: #c7c7c7;
      -webkit-animation: slidein 3s ease-in-out;
      -webkit-animation-fill-mode: both;
      -moz-animation: slidein 3s ease-in-out;
      -moz-animation-fill-mode: both;
      border-radius: 20px;
      margin-top: -2em;

      @keyframes slidein  {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
`;