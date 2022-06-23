import styled from "styled-components";
import { mobileHeight, mobileSize } from "~constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-height: ${mobileHeight}) {
    margin: 50px 0px 30px 0px;
  }

  @media (min-height: ${mobileHeight}) {
    justify-content: center;
    height: 100%;
  }

  gap: 20px;
  h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 72px;
    width: 135px;
  }
`;

export const TreeLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #24292e;
  padding: 15px;
  width: 250px;
  border-radius: 10px;
  gap: 10px;
  color: darkturquoise;
  text-decoration: none;
  transition: margin 300ms;
  img {
    width: 32px;
  }
  @media (min-width: ${mobileSize}) {
    :hover {
      margin-left: 30px;
    }
  }
`;
