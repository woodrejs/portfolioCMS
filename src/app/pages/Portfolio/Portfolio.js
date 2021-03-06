import React, { useEffect, useRef } from "react";
import { scrollTrack } from "../../utils/scroll";
import ProjectSection from "../../components/ProjectSection";
import Nav from "../../components/Nav";
import { variants_main } from "../../utils/motion/main.motion";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitle,
  StyledProjectsBox,
  StyledFooter,
} from "./Portfolio.css";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [{ projects, isMobile }] = useCounter();

  useEffect(() => scrollTrack(null, isMobile, scrollRef), []);

  return (
    <StyledBck ref={scrollRef}>
      <Nav />

      <StyledSection>
        <StyledTitle title="projekty" size="l" />

        <StyledSubTitle
          children="informacje"
          variants={variants_main}
          animate="visible"
          initial="hidden"
          exit="hidden"
        />

        <StyledProjectsBox>
          {projects?.map((project, index) => (
            <ProjectSection
              key={project._id}
              data={project}
              number={index + 1}
            />
          ))}
        </StyledProjectsBox>
      </StyledSection>
      <StyledFooter
        btn1={{ name: "o mnie", link: "/about" }}
        btn2={{ name: "kontakt", link: "/contact" }}
      />
    </StyledBck>
  );
};

export default Portfolio;
