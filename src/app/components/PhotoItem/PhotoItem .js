import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_main } from "../../utils/motion/main.motion";
import { useMotionValue } from "framer-motion";
import { StyledPhoto } from "./PhotoItem.css";

const PhotoItem = ({ image, className, type }) => {
  const imgIsLoaded = useMotionValue(false);
  const { s, m, l } = image;
  const mobileSrcSet = `${s.url} 200w,${m.url} 250w,${l.url} 400w`;
  const deskopSrcSet = `${s.url} 260w,${m.url} 640w,${l.url} 920w`;

  return (
    <div className={className}>
      {image && (
        <LightgalleryItem group="any" src={l.url}>
          <StyledPhoto
            srcSet={type === "mobile" ? mobileSrcSet : deskopSrcSet}
            sizes={type === "mobile" ? "25vw" : "66vw"}
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
      )}
    </div>
  );
};

export default PhotoItem;
