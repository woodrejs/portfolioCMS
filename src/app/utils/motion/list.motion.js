export const variants_list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
