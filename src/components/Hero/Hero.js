import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My name is Mohanad Amr, and
          <br /> Welcome To My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Where I show you a recap of my experience as a Fullstack Developer,
          projects, accomplishments, and some background information about me
          using multiple different frameworks.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
