import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
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
} from "./ProjectSection.css";

const infoFields = [
  { name: "data", option: "dateLable", id: uuid() },
  { name: "typ", option: "typeLable", id: uuid() },
  { name: null, option: "date", id: uuid() },
  { name: null, option: "type", id: uuid() },
];

const ProjectSection = ({ data, number }) => {
  const [show, setShow] = useState(false);
  const { title, _id } = data;
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const ThumbnailSUrl =
    data && data.thumbnail && data.thumbnail.s ? data.thumbnail.s.url : null;
  const ThumbnailLUrl =
    data && data.thumbnail && data.thumbnail.l ? data.thumbnail.l.url : null;

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
        <Link to={`/project/${_id}`}>
          <StyledPhoto
            srcSet={`${ThumbnailSUrl} 400w,
            ${ThumbnailLUrl} 800w`}
            sizes="(max-width: 414px) 400px,800px"
            src={ThumbnailLUrl}
            alt="project_photo"
            variants={variants_main}
            whileHover="hover"
          />
        </Link>
      </StyledPhotoBox>

      <StyledButton title={title} to={`/project/${_id}`} />
    </StyledArticle>
  );
};

export default ProjectSection;
