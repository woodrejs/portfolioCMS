import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LightgalleryProvider } from "react-lightgallery";
import Scrollbar from "smooth-scrollbar";
import Nav from "../../components/Nav";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledBck,
  StyledSection,
  StyledArticle,
  StyledTitle,
  StyledButton,
  StyledFooter,
  StyledMobilePhoto,
  StyledDeskopPhoto,
} from "./Project.css";

const Project = () => {
  const [{ projects, isMobile }] = useCounter();
  const scrollRef = useRef(null);
  const { id } = useParams();
  const project =
    projects && projects.filter((project) => project._id === id)[0];

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, {
      damping: isMobile ? 0.02 : 0.07,
    });
    scrollBar.track.xAxis.element.remove();
    scrollBar.addListener((status) => {
      scrollBar.setPosition(0, status.offset.y);
    });
  }, []);

  return (
    <StyledBck ref={scrollRef}>
      <Nav />
      {project && (
        <StyledSection>
          <StyledArticle>
            <StyledTitle title={project.title} size="l" />
            <StyledButton title="powrót" to="/portfolio" invertArrow={true} />

            <LightgalleryProvider galleryClassName="my_custom_classname">
              <StyledMobilePhoto image={project.mobileView} />
              <StyledDeskopPhoto image={project.deskopView} />
            </LightgalleryProvider>
          </StyledArticle>
        </StyledSection>
      )}
      <StyledFooter
        btn1={{ name: "portfolio", link: "/portfolio" }}
        btn2={{ name: "kontakt", link: "/contact" }}
      />
    </StyledBck>
  );
};

export default Project;
