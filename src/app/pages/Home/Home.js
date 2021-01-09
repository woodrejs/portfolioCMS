import React from "react";
import { useMotionValue } from "framer-motion";
import { variants_main } from "../../utils/motion/main.motion";
import Nav from "../../components/Nav";
import LgImg from "../../../assets/images/home/my_photo.jpg";
import MdImg from "../../../assets/images/home/my_photo_1024.jpg";
import SmImg from "../../../assets/images/home/my_photo_736.jpg";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitle,
  StyledPhotoBox,
  StyledPhoto,
  StyledButton,
} from "./Home.css";

const Home = () => {
  const imgIsLoaded = useMotionValue(false);

  return (
    <StyledBck>
      <Nav />
      <StyledSection>
        <StyledTitle size="l" title="frontend developer" />
        <StyledSubTitle size="s" title="ui/ux designer" />

        <StyledPhotoBox to="/about">
          <StyledPhoto
            srcSet={`${SmImg} 736w,
            ${MdImg} 1024w,
            ${LgImg} 1520w`}
            sizes="90vw"
            src={`${LgImg}`}
            alt="my_photo"
            variants={variants_main}
            animate={imgIsLoaded ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
            onLoad={() => imgIsLoaded.set(true)}
          />
        </StyledPhotoBox>

        <StyledButton title="o mnie" to="/about" white={true} />
      </StyledSection>
    </StyledBck>
  );
};

export default Home;
/*
import React from "react";
import { useMotionValue } from "framer-motion";
import { variants_photo, variants_title } from "../../utils/motion/index";
import Nav from "../../components/Nav";
import LgImg from "../../../assets/images/home/my_photo.jpg";
import MdImg from "../../../assets/images/home/my_photo_1024.jpg";
import SmImg from "../../../assets/images/home/my_photo_736.jpg";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitleBox,
  StyledSubTitle,
  StyledPhotoBox,
  StyledPhoto,
  StyledButton,
} from "./Home.css";

const Home = () => {
  const imgIsLoaded = useMotionValue(false);

  return (
    <StyledBck>
      <Nav />
      <StyledSection>
        <StyledTitle size="l" title="frontend developer" />

        <StyledSubTitleBox>
          <StyledSubTitle
            children="ui/ux designer"
            variants={variants_title}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </StyledSubTitleBox>

        <StyledPhotoBox to="/about">
          <StyledPhoto
            srcSet={`${SmImg} 736w,
            ${MdImg} 1024w,
            ${LgImg} 1520w`}
            sizes="(max-width: 736px) 736px,
            (max-width: 1024px) 1024px,
            1520px"
            src={`${LgImg}`}
            alt="my_photo"
            variants={variants_photo}
            animate={imgIsLoaded ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
            onLoad={() => imgIsLoaded.set(true)}
          />
        </StyledPhotoBox>

        <StyledButton title="o mnie" to="/about" white={true} />
      </StyledSection>
    </StyledBck>
  );
};

export default Home;
*/
