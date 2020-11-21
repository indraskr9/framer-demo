import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const backdropVariants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

const modalVariants = {
  hidden: {y: '-100vh', opacity: 0},
  visible: {y: '200px', opacity: 1, transition: {delay: 0.5}},
};

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'>
          <motion.div className='modal' variants={modalVariants}>
            <p>Wanna make another pizza?</p>
            <Link to='/'>
              <button>Yes</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
