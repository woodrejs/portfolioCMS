import React, { useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import Scrollbar from "smooth-scrollbar";
import { useMotionValue } from "framer-motion";
import Footer from "../../components/Footer";
import { useTransform } from "framer-motion";
import Nav from "../../components/Nav";
import { variants_main } from "../../utils/motion/main.motion";
import { DATA } from "./About.data";
import LgImg from "../../../assets/images/about/my_photo_2000.jpg";
import MdImg from "../../../assets/images/about/my_photo_1024.jpg";
import SmImg from "../../../assets/images/about/my_photo_736.jpg";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledBck,
  StyledSection,
  StyledArticle,
  StyledTitle,
  StyledPhoto,
  StyledTextBox,
  StyledSubTitle,
  StyledSubTitleOutline,
  StyledThirdTitle,
  StyledText,
  StyledPhotoBox,
} from "./About.css";

const About = () => {
  const scrollRef = useRef(null);
  const scroll = useMotionValue(0);
  const imgIsLoaded = useMotionValue(false);
  const scale = useTransform(scroll, [0, 1800], [1, 1.3]);
  const [{ isMobile }] = useCounter();

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, {
      damping: isMobile ? 0.12 : 0.07,
    });

    scrollBar.addListener((status) => scroll.set(status.offset.y));
  }, []);

  return (
    <StyledBck ref={scrollRef}>
      <Nav />

      <StyledSection>
        <StyledArticle>
          <StyledPhotoBox
            variants={variants_main}
            animate={imgIsLoaded ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          >
            <StyledPhoto
              srcSet={`${SmImg} 736w,
              ${MdImg} 1024w,
              ${LgImg} 2000w`}
              sizes="(max-width: 736px) 736px,
              (max-width: 1024px) 1024px,
              2000px"
              src={`${LgImg}`}
              alt="my_photo"
              //motion
              style={{ scale }}
              onLoad={() => imgIsLoaded.set(true)}
            />
          </StyledPhotoBox>
          <StyledTitle title="o mnie" size="l" />

          <StyledTextBox>
            <StyledSubTitle title="frontend developer" size="m" />
            <StyledSubTitleOutline title="ui/ux designer" size="m" />

            {DATA.map((item, index) => (
              <InView triggerOnce={true} threshold={0.2} key={item.id}>
                {({ inView, ref }) => (
                  <>
                    {index === 2 && (
                      <StyledThirdTitle title="oferta" size="s" />
                    )}
                    <StyledText
                      ref={ref}
                      children={item.text}
                      variants={variants_main}
                      animate={inView ? "visible" : "hidden"}
                      initial="hidden"
                      exit="hidden"
                    />
                  </>
                )}
              </InView>
            ))}
          </StyledTextBox>
        </StyledArticle>
      </StyledSection>
      <Footer
        btn1={{ name: "portfolio", link: "/portfolio" }}
        btn2={{ name: "kontakt", link: "/contact" }}
      />
    </StyledBck>
  );
};
export default About;
