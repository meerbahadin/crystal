import { ComponentType } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';

const ImageMotion = motion<MotionProps | ImageProps>(Image as ComponentType);

const Crystal = () => {
  return (
    <ImageMotion
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      drag
      dragDirectionLock
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      onDragEnd={(e, info) => {}}
      whileTap={{ cursor: 'grabbing' }}
      src="/crystal.svg"
      width="xs"
      mb={5}
      alt="netspot"
    />
  );
};

export default Crystal;
