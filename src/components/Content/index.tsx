import * as React from "react";
import { Wrapper, ProfilePicture, TreeLink } from "./index.styles";
import profilePicture from "~images/kernel.jpg";
import github from "~images/github.png";
import medium from "~images/medium.png";
import twitter from "~images/twitter.png";
import linkedin from "~images/linkedin.png";
import youtube from "~images/youtube.png";
import email from "~images/email.png";

const Content = () => {
  return (
    <Wrapper>
      <ProfilePicture>
        <img
          width={80}
          src={profilePicture}
          alt="profile picture cristian buta"
        />
        <h3>
          <span>@cristianbuta</span>
          <span>{"< 0xlup3x >"}</span>
        </h3>
      </ProfilePicture>
      <TreeLink href="https://github.com/cristianbuta" target="_blank">
        <img src={github} alt="github" />
        <span>I code here</span>
      </TreeLink>
      <TreeLink href="https://medium.com/@0xlup3x" target="_blank">
        <img src={medium} alt="medium" />
        <span>I write here</span>
      </TreeLink>
      <TreeLink href="https://twitter.com/CristianButa6" target="_blank">
        <img src={twitter} alt="twitter" />
        <span>I tweet here</span>
      </TreeLink>
      <TreeLink
        href="https://www.linkedin.com/in/cristian-daniel-buta/"
        target="_blank"
      >
        <img src={linkedin} alt="linkedin" />
        <span>I do business here</span>
      </TreeLink>
      <TreeLink
        href="https://www.youtube.com/channel/UCyWpg4uteUT28_u0jAe3Y0w"
        target="_blank"
      >
        <img src={youtube} alt="youtube" />
        <span>I rarely post here</span>
      </TreeLink>
      <TreeLink href="mailto:cristian.daniel.buta@gmail.com" target="_blank">
        <img src={email} alt="email" />
        <span>Mail me here</span>
      </TreeLink>
    </Wrapper>
  );
};

export default React.memo(Content);
