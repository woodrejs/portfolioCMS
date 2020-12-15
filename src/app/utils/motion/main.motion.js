export const variants_main = {
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    y: 0,
    transition: { ease: "easeIn", duration: 0.4 },
  },
  hidden: {
    opacity: 0,
    rotateZ: 10,
    y: [0, -10, 0, 25],
    transition: { ease: "easeOut", duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    transition: { ease: "easeInOut", duration: 0.6 },
  },
};
