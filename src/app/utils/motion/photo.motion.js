export const variants_photo = {
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: {
    opacity: 0,
    y: 200,
    rotateZ: 2,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hover: {
    scale: 1.05,
    transition: { ease: "easeInOut", duration: 0.6 },
  },
};
