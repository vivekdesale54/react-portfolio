import {
  delay,
  easeIn,
  easeInOut,
  scale,
  stagger,
  transform,
} from "framer-motion";

export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 0.5,
    y: 1,
    transition: {
      duration: 1,
      show: "beforeChildren",
      staggerChildrem: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { x: 20 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const photoAnimation = {
  hidden: { opacity: 1, scale: 1.5 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: {
    x: "-130%", // start completely off-screen to the left
    skew: "45deg", // skewed diagonally
  },
  show: {
    x: "100%", // moves all the way across to the right
    skew: "0deg", // straightens back to normal
    transition: {
      ease: "easeOut",
      duration: 1, // takes 1 second
    },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};
