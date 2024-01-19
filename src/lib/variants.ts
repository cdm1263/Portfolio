const header = {
  textVariant: {
    initial: { opacity: 0, y: "-50px" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  },
};

const link = {
  tap: { backgroundColor: "#454545" },
  linkVariant: {
    initial: { opacity: 0, y: -10, display: "none" },
    animate: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { opacity: { delay: 1.8 }, y: { duration: 0.5, delay: 1.8 } },
    },
  },
};

const title = {
  titleVariant: {
    initial: { opacity: 0, y: -10, display: "none" },
    animate: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { opacity: { delay: 1.4 }, y: { duration: 0.5, delay: 1.4 } },
    },
  },
};

const nav = {
  navVariant: {
    initial: { flex: 0, y: "-200px", width: "80px", padding: 0, opacity: 0.2 },
    animate: {
      flex: 1,
      opacity: 1,
      y: 0,
      width: "100%",
      padding: "0 50px",
      transition: {
        y: { duration: 0.3 },
        flex: {
          duration: 1.5,
          delay: 0.3,
          ease: "easeInOut",
        },
        opacity: { duration: 1.3, ease: "easeInOut" },
      },
    },
  },
};

export { header, link, title, nav };
