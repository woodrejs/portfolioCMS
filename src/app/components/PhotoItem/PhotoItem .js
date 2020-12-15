import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_main } from "../../utils/motion/main.motion";
import { useMotionValue } from "framer-motion";
import { StyledPhoto } from "./PhotoItem.css";

const PhotoItem = ({ image, className }) => {
  const imgIsLoaded = useMotionValue(false);
  const { s, m, l } = image;

  return (
    <div className={className}>
      <LightgalleryItem group="any" src={l.url}>
        <StyledPhoto
          srcSet={`${s.url} 260w,
        ${m.url} 640w,
        ${l.url} 920w`}
          sizes="(max-width: 414px) 260px,
          (max-width: 1024px) 640px,
          920px"
          src={l.url}
          alt="project_layout_image"
          //motion
          variants={variants_main}
          animate={imgIsLoaded ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
          onLoad={() => imgIsLoaded.set(true)}
        />
      </LightgalleryItem>
    </div>
  );
};

export default PhotoItem;
