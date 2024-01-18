const header = {
  textVariant: {
    initial: { opacity: 0, y: "-50px" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 1.3 },
    },
  },
};

const link = {
  hover: { opacity: 1, transition: { duration: 0.1 } },
  tap: { backgroundColor: "#454545" },
};

export { header, link };
