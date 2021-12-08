import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import {useScrollY} from '../../hooks/useScrollY';
import styles from './Up.module.css';
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {

  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight});
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={controls}
      className={styles.up} >
      <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
    </motion.div>
  );
};