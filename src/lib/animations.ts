export const fadeUp = (distance = 24) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
});

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
