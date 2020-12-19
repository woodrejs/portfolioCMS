import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_main } from "../../utils/motion/main.motion";
import { useMotionValue } from "framer-motion";
import { StyledPhoto } from "./PhotoItem.css";

const PhotoItem = ({ image, className }) => {
  const imgIsLoaded = useMotionValue(false);

  return (
    <div className={className}>
      {image && (
        <LightgalleryItem group="any" src={image.l.url}>
          <StyledPhoto
            srcSet={`${image.s.url} 260w,
            ${image.m.url} 640w,
            ${image.l.url} 920w`}
            sizes="(max-width: 414px) 260px,
            (max-width: 1024px) 640px,
            920px"
            src={image.l.url}
            alt="project_layout_image"
            //motion
            variants={variants_main}
            animate={imgIsLoaded ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
            onLoad={() => imgIsLoaded.set(true)}
          />
        </LightgalleryItem>
      )}
    </div>
  );
};

export default PhotoItem;
