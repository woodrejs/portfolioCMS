import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  variants_text,
  variants_item,
  variants_photo,
  variants_list,
} from "../../utils/motion/index";
import {
  StyledArticle,
  StyledInfoBox,
  StyledTitle,
  StyledDate,
  StyledType,
  StyledDateData,
  StyledTypeData,
  StyledNumber,
  StyledPhotoBox,
  StyledPhoto,
  StyledButton,
  StyledLine,
} from "./ProjectSection.css";

const ProjectSection = ({ data, number }) => {
  const { type, name, thumbnail, _id, date } = data;
  return (
    <StyledArticle>
      <StyledLine />

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <StyledNumber
            ref={ref}
            children={number}
            variants={variants_text}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          />
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <StyledInfoBox
            ref={ref}
            variants={variants_list}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          >
            <StyledTitle children={name} variants={variants_item} custom={0} />
            <StyledDate children="data" variants={variants_item} custom={1} />
            <StyledType children="typ" variants={variants_item} custom={3} />
            <StyledTypeData
              children={type}
              variants={variants_item}
              custom={4}
            />
            <StyledDateData
              children={date}
              variants={variants_item}
              custom={2}
            />
          </StyledInfoBox>
        )}
      </InView>

      <StyledPhotoBox>
        <Link to={`/project/${_id}`}>
          <InView triggerOnce={true} threshold={0}>
            {({ inView, ref }) => (
              <StyledPhoto
                srcSet={`${thumbnail.s.base64} 400w,
                ${thumbnail.l.base64} 800w`}
                sizes="(max-width: 414px) 400px,800px"
                src={thumbnail.l.base64}
                ref={ref}
                alt="project_photo"
                variants={variants_photo}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
                exit="hidden"
                whileHover="hover"
              />
            )}
          </InView>
        </Link>
      </StyledPhotoBox>

      <StyledButton title={name} to={`/project/${_id}`} />
    </StyledArticle>
  );
};

export default ProjectSection;
