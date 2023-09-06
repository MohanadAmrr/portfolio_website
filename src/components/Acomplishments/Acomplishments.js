import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "Excellent Grade",
    text: "Graduation Project  which covered Multitask Regression in Sound Event Detection",
  },
  {
    number: "Completed",
    text: "UT.6.10x: Embedded Systems from UTAustinX",
  },
  {
    number: "Awarded",
    text: "Employee of the month for January & March 2023 in AvidBeam",
  },
  {
    number: "A+",
    text: "Embedded Engineering, Computer System Architecture, Software Engineering, Data Structures And Algorithms",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
