import React, { useState } from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_photo } from "../../utils/motion/photo.motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPhoto = styled(motion.img)`
  width: 100%;
  cursor: pointer;
`;

const PhotoItem = ({ image, alt, className }) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);

  return (
    <LightgalleryItem group="any" src={image.l.base64} className={className}>
      <StyledPhoto
        srcSet={`${image.s.base64} 260w,
       ${image.m.base64} 640w,
       ${image.l.base64} 920w`}
        sizes="(max-width: 414px) 260px,
        (max-width: 1024px) 640px,
        920px"
        src={image.l.base64}
        alt={alt}
        variants={variants_photo}
        animate={imgIsLoaded ? "visible" : "hidden"}
        initial="hidden"
        exit="hidden"
        onLoad={() => setImgIsLoaded(true)}
      />
    </LightgalleryItem>
  );
};

export default PhotoItem;
