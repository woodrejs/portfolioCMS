import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { v4 as uuid } from "uuid";
import { variants_main } from "../../utils/motion/main.motion";
import {
  StyledArticle,
  StyledInfoBox,
  StyledTitle,
  StyledData,
  StyledNumber,
  StyledPhotoBox,
  StyledPhoto,
  StyledButton,
  StyledLine,
  StyledLink,
} from "./ProjectSection.css";

const infoFields = [
  { name: "data", option: "dateLable", id: uuid() },
  { name: "typ", option: "typeLable", id: uuid() },
  { name: null, option: "date", id: uuid() },
  { name: null, option: "type", id: uuid() },
];

const ProjectSection = ({ data, number }) => {
  const { title, _id } = data;
  const thumbL = data?.thumbnail?.l?.url;
  const thumbS = data?.thumbnail?.s?.url;
  const [show, setShow] = useState(false);
  const options = { threshold: 0, triggerOnce: true };
  const { ref, inView } = useInView(options);

  useEffect(() => setShow(inView), [inView]);

  return (
    <StyledArticle ref={ref}>
      <StyledLine />

      <StyledNumber
        children={number}
        variants={variants_main}
        animate={show ? "visible" : "hidden"}
        initial="hidden"
        exit="hidden"
      />

      <StyledInfoBox>
        <StyledTitle
          children={title}
          variants={variants_main}
          animate={show ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
        />
        {infoFields.map(({ name, id, option }) => (
          <StyledData
            option={option}
            key={id}
            children={name ? name : data[option]}
            variants={variants_main}
            animate={show ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          />
        ))}
      </StyledInfoBox>

      <StyledPhotoBox
        variants={variants_main}
        animate={show ? "visible" : "hidden"}
        initial="hidden"
        exit="hidden"
      >
        <StyledLink to={`/project/${_id}`}>
          <StyledPhoto
            srcSet={`${thumbS} 400w,
            ${thumbL} 800w`}
            sizes="100vw, (orientation: landscape) 30vw"
            src={thumbL}
            alt="project_photo"
            variants={variants_main}
            whileHover="hover"
          />
        </StyledLink>
      </StyledPhotoBox>

      <StyledButton title={title} to={`/project/${_id}`} />
    </StyledArticle>
  );
};

export default ProjectSection;
