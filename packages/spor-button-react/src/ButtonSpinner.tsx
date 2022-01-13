import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
/**
 * The loading spinner shown inside of buttons when `isLoading` is set to true.
 */
export const ButtonSpinner = () => {
  return (
    <Box as="svg" viewBox="0 0 31 20" width="40%" maxWidth="90px" mx="auto">
      <motion.g variants={variants} animate="loading">
        <motion.circle
          cx="4"
          cy="10"
          r="4"
          fill="currentColor"
          variants={itemVariants}
        />
        <motion.circle
          cx="16"
          cy="10"
          r="4"
          fill="currentColor"
          variants={itemVariants}
        />
        <motion.circle
          cx="27"
          cy="10"
          r="4"
          fill="currentColor"
          variants={itemVariants}
        />
      </motion.g>
    </Box>
  );
};

const variants = {
  loading: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      repeat: Infinity,
    },
  },
};
const itemVariants = {
  loading: {
    y: [0, -5, 0, 0],
    transition: {
      duration: 0.7,
      repeat: Infinity,
    },
  },
};

const MotionBox = motion(Box);
