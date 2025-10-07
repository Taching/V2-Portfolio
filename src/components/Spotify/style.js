import styled from "styled-components"
import { media } from "@utils"
import { color } from "@color"

export const SpotifyStyle = styled.div`
  height: auto;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 200px;
  position: relative;
  ${media.md`
    padding: 0 70px;
  `}
  ${media.sm`
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0px;
  `}
`
export const LastFmLogo = styled.div`
  a {
    height: 50px;
    width: 50px;
    display: block;
    z-index: 10;
  }
  svg {
    margin-left: 2px;
    margin-top: 5px;
  }
`
export const Toptext = styled.div`
  height: 20px;
  position: absolute;
  top: -70px;
  right: 0;
  color: ${color.white};
  display: flex;
  width: 100%;
  justify-content: center;
  ${media.md`
    width: 80%;
    left: 80px;
  `}
  ${media.sm`
    left: 50px;
  `}
  p {
    margin-right: 15px;
    text-transform: capitalize;
    letter-spacing: 4px;
    ${media.md`
      letter-spacing: 1px;
    `}
  }
  p:nth-child(1) {
    ${media.sm`
      display: none;
    `}
  }
  p:nth-child(2) {
    display: none;
    ${media.sm`
      display: block;
    `}
  }
  a {
    display: flex;
    color: ${color.MossGreen};
    transition: border-bottom 0.5s;
    height: 30px;
    :hover {
      border-bottom: 3px solid ${color.MossGreen};
    }
  }
`
export const Player = styled.div`
  display: flex;
  width: 100%;
  span {
    color: ${color.black};
    font-weight: 400;
    margin: 0px;
    margin-right: 40px;
    z-index: 11;
    ${media.sm`
      color: ${color.MossGreen};
      margin-right: 0px;
      margin-left: 40px;
    `}
  }
  ul {
    margin: 0px;
    width: 100%;
    display: flex;
    list-style: none;
    padding: 10px 10px 10px 0px;
    ${media.sm`
      padding: 5px 20px;
    `}
    li {
      margin-bottom: 0px;
    }
    li:nth-child(1) {
      height: 50px;
      img {
        width: 50px;
      }
      ${media.sm`
        /* display: flex;
        justify-content: center; */
      `}
    }
    li:nth-child(2) {
      padding-left: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 45%;
      p {
        color: ${color.MossGreen};
      }
      ${media.sm`
        padding-left: 10px;
      `}
    }
    li:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      h4{
        color: ${color.Gold};
      }
      ${media.sm`
        display: none;
      `}
    }
    li:nth-child(4) {
      width: 47%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p {
        color: ${color.MossGreen};
        letter-spacing: 1.4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        ${media.sm`
          text-align: right;
          letter-spacing: 1px;
          white-space: normal;
          overflow: none;
          text-overflow: none;
        `}
      }
    }
    :last-child {
      border-bottom: none;
    }
    span {
      color: ${color.white};
      margin-left: 10px;
    }
    a {
      color: ${color.white};
      font-weight: 700;
      letter-spacing: 2px;
      transition: border-bottom 0.5s;
      ${media.sm`
        letter-spacing: 0px;
      `}
      :hover {
        border-bottom: 2px solid ${color.MossGreen};
      }
    }
    h4 {
      font-weight: 800;
      color: ${color.white};
    }
    .artist {
      text-align: center;
    }
  }
`
export const RepeatIcon = styled.div`
  position: relative;
  text-align: end;
  .count {
    position: absolute;
    margin: 0px;
    right: 5px;
    top: 3px;
    color: ${color.white};
  }
  .lessdigit {
    right: 9px;
  }
`
