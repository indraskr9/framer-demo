import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const containerVariants = {
  hidden: {x: '100vw', opacity: 0},
  visible: {x: 0, opacity: 1, transition: {type: 'spring', delay: 0.5}},
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'},
  },
};

const nextVariants = {
  hidden: {x: '-50vw', scale: 0},
  visible: {x: 0, scale: 1, transition: {type: 'spring', stiffness: '120'}},
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
};

const Base = ({addBase, pizza}) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className='base container'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      exit='exit'>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{scale: 1.3, originX: 0, color: '#f8e112'}}
              transition={{type: 'spring', stiffness: 300}}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        // when using variable, in child elements don't need initial and animate prop, automatically gets from parent
        // if the key is same in both (i.e: hidden and visible)
        <motion.div className='next' variants={nextVariants}>
          <Link to='/toppings'>
            <motion.button variants={buttonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
