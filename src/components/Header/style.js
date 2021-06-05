import styled from 'styled-components'

export const Layout = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  background: #fff;
  z-index: 2;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, .25);
  -moz-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, .25);
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, .25);
  position: sticky;
  top: 0;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2em;

  background: #fff;
  z-index: 2;

  .menu-mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

export const LogoWPP = styled.span`
  font-size: 24px;
  cursor: pointer;
  font-weight: 800;

  b {
    color: #283acd;
    font-weight: 800;
  }

  small {
    font-weight: 400;
    color: #999;
    font-size: 14px;
    cursor: default;
  }
`

export const Buttons = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      margin-left: 20px;
      transition-duration: 200ms;
      border-bottom: 1px solid #fff;

      :hover {
        border-bottom: 1px solid #000;
      }

      svg {
        margin-right: 10px;
      }
    }

    .donate {
      border: 1px solid #0bc75b;
      padding: 10px 1.5em;
      border-radius: 20px;
      transition-duration: 200ms;

      * {
        color: #15763f;
      }

      :hover {
        background: #15763f;
        border: 1px solid #0bc75b;

        * {
          color: #fff;
          cursor: pointer;
        }
      }

    }
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;

  font-weight: 600;
  cursor: pointer;
  color: #000;
  text-decoration: none;
`