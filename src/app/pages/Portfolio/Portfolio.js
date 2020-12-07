import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import ProjectSection from "../../components/ProjectSection";
import Nav from "../../components/Nav";
import { variants_title } from "../../utils/motion/index";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitleBox,
  StyledSubTitle,
  StyledProjectsBox,
  StyledFooter,
} from "./Portfolio.css";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [{ projects, isMobile }] = useCounter();

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, {
      damping: isMobile ? 0.02 : 0.07,
    });
    scrollBar.track.xAxis.element.remove();
    scrollBar.addListener((status) => {
      scrollBar.setPosition(0, status.offset.y);
    });
  });

  return (
    <StyledBck ref={scrollRef}>
      <Nav />
      <StyledSection>
        <StyledTitle title="projekty" size="l" />

        <StyledSubTitleBox
          children={
            <StyledSubTitle
              children="informacje"
              variants={variants_title}
              animate="visible"
              initial="hidden"
              exit="hidden"
            />
          }
        />

        <StyledProjectsBox>
          {projects &&
            projects.map((project, index) => (
              <ProjectSection
                key={project._id}
                data={project}
                number={index + 1}
              />
            ))}
        </StyledProjectsBox>
      </StyledSection>
      <StyledFooter />
    </StyledBck>
  );
};

export default Portfolio;
