export const variants_item = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: (i) => ({
    opacity: 0,
    transition: {
      delay: 0.3 - i * 0.1,
    },
  }),
  hover: { scale: 1.15 },
};
