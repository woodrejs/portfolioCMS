import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LightgalleryProvider } from "react-lightgallery";
import Scrollbar from "smooth-scrollbar";
import PhotoItem from "../../components/PhotoItem";
import Nav from "../../components/Nav";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledBck,
  StyledSection,
  StyledArticle,
  StyledTitle,
  StyledButton,
  StyledFooter,
  StyledMobileLayoutPhotoBox,
  StyledDeskopLayoutPhotoBox,
} from "./Project.css";

const Project = () => {
  const [{ projects, isMobile }] = useCounter();
  const scrollRef = useRef(null);
  let { id } = useParams();
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
  });

  return (
    <StyledBck ref={scrollRef}>
      <Nav />
      {project && (
        <StyledSection>
          <StyledArticle>
            <StyledTitle title={project.title} size="l" />
            <StyledButton title="powrót" to="/portfolio" invertArrow={true} />
            <LightgalleryProvider galleryClassName="my_custom_classname">
              <StyledMobileLayoutPhotoBox>
                <PhotoItem
                  image={project.mobileView}
                  alt="Mobile_Layout_Photo"
                />
              </StyledMobileLayoutPhotoBox>

              <StyledDeskopLayoutPhotoBox>
                <PhotoItem
                  image={project.deskopView}
                  alt="Deskop_Layout_Photo"
                />
              </StyledDeskopLayoutPhotoBox>
            </LightgalleryProvider>
          </StyledArticle>
        </StyledSection>
      )}
      <StyledFooter />
    </StyledBck>
  );
};

export default Project;
