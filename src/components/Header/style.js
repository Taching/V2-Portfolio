import styled from "styled-components"
import { getOuterSpace, media } from "@utils"
import { color } from "@color"
export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${getOuterSpace("padding")}
  z-index: 12;
  ${media.md`
    display: none;
  `}
`
export const Navbar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 7em;
  width: 100%;
`
export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
  a {
    font-weight: 100;
    font-size: 1rem;
    color: ${color.MossGreen};
    z-index: 100;
    pointer-events: all;
  }
`
export const NavItemRight = styled.li`
  font-size: 0.7em;
  text-align: right;
  .active {
    color: white;
    text-decoration: line-through ${color.MossGreen};
  }
  .active:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${color.MossGreen};
    display: inline-block;
    margin-right: 10px;
  }
`
